"use client";

import { useEffect, useCallback, useState } from "react";
import { useAccount, useConnect, useDisconnect, useSwitchChain, useChainId, readContract, useSendTransaction, encodeFunctionData } from "wagmi";
import sdk, { AddFrame, FrameNotificationDetails, type Context } from "@farcaster/frame-sdk";
import { config } from "~/components/providers/WagmiProvider";
import { Button } from "~/components/ui/Button";
import { truncateAddress } from "~/lib/truncateAddress";
import { base, optimism } from "wagmi/chains";

import KlimaInfinity from "~/lib/contracts/abi/KlimaInfinity.ts";
import { retirementAggregatorV2, bct } from "~/lib/constants";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { parseEther, formatEther } from "viem";
import { getAllowance } from "~/lib/utils";
import { BaseError, UserRejectedRequestError } from "viem";

type OnStatusHandler = (
  status: "userConfirmation" | "networkConfirmation" | "done" | "error",
  message?: string
) => void;

export default function Klima(
  { title }: { title?: string } = { title: "Klima Frame" }
) {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<Context.FrameContext>();
  const [added, setAdded] = useState(false);
  const [notificationDetails, setNotificationDetails] = useState<FrameNotificationDetails | null>(null);
  const [addFrameResult, setAddFrameResult] = useState("");
  const [retirementParams, setRetirementParams] = useState({
    maxAmountIn: "",
    retireAmount: "",
    beneficiaryAddress: "",
    beneficiaryString: "",
    retirementMessage: "",
  });
  const [allowance, setAllowance] = useState<string>("0");
  const [estimatedCost, setEstimatedCost] = useState<string>("");
  const [txStatus, setTxStatus] = useState<{
    status: "userConfirmation" | "networkConfirmation" | "done" | "error";
    message?: string;
  } | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isCheckingAllowance, setIsCheckingAllowance] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { disconnect } = useDisconnect();
  const { connect } = useConnect();

  const {
    switchChain,
    error: switchChainError,
    isError: isSwitchChainError,
    isPending: isSwitchChainPending,
  } = useSwitchChain();

  const {
    sendTransaction,
    error: sendTxError,
    isError: isSendTxError,
    isPending: isSendTxPending,
  } = useSendTransaction();

  const handleSwitchChain = useCallback(() => {
    switchChain({ chainId: chainId === base.id ? optimism.id : base.id });
  }, [switchChain, chainId]);

  useEffect(() => {
    const load = async () => {
      const context = await sdk.context;
      setContext(context);
      setAdded(context.client.added);

      sdk.on("frameAdded", ({ notificationDetails }) => {
        setAdded(true);
        if (notificationDetails) {
          setNotificationDetails(notificationDetails);
        }
      });

      sdk.on("frameRemoved", () => {
        setAdded(false);
        setNotificationDetails(null);
      });

      console.log("Calling ready");
      sdk.actions.ready({});
    };

    if (sdk && !isSDKLoaded) {
      console.log("Calling load");
      setIsSDKLoaded(true);
      load();
      return () => {
        sdk.removeAllListeners();
      };
    }
  }, [isSDKLoaded]);

  const addFrame = useCallback(async () => {
    try {
      setNotificationDetails(null);
      const result = await sdk.actions.addFrame();

      if (result.notificationDetails) {
        setNotificationDetails(result.notificationDetails);
      }
      setAddFrameResult(
        result.notificationDetails
          ? `Added, got notificaton token ${result.notificationDetails.token} and url ${result.notificationDetails.url}`
          : "Added, got no notification details"
      );
    } catch (error) {
      if (error instanceof AddFrame.RejectedByUser) {
        setAddFrameResult(`Not added: ${error.message}`);
      }
      
      if (error instanceof AddFrame.InvalidDomainManifest) {
        setAddFrameResult(`Not added: ${error.message}`);
      }

      setAddFrameResult(`Error: ${error}`);
    }
  }, []);

  const resetForm = useCallback(() => {
    setRetirementParams({
      maxAmountIn: "",
      retireAmount: "",
      beneficiaryAddress: "",
      beneficiaryString: "",
      retirementMessage: "",
    });
    setEstimatedCost("");
    setTxStatus(null);
    setTxHash(null);
    setIsConfirming(false);
    setIsConfirmed(false);
    setSuccessMessage(null);
  }, []);

  const checkAllowance = useCallback(async () => {
    if (!address) return;

    try {
      setIsCheckingAllowance(true);
      const allowance = await readContract({
        address: bct,
        abi: [{
          name: "allowance",
          type: "function",
          stateMutability: "view",
          inputs: [
            { name: "owner", type: "address" },
            { name: "spender", type: "address" }
          ],
          outputs: [{ name: "", type: "uint256" }]
        }],
        functionName: "allowance",
        args: [address, retirementAggregatorV2],
      });

      setAllowance(formatEther(allowance));
    } catch (err) {
      console.error("Error checking allowance:", err);
      handleOnStatus("error", "Failed to check token allowance");
    } finally {
      setIsCheckingAllowance(false);
    }
  }, [address]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleRetireCarbon = useCallback(async () => {
    if (!isConnected || chainId !== 137) return;

    try {
      handleOnStatus("userConfirmation");
      setTxHash(null);
      setIsConfirming(false);
      setIsConfirmed(false);

      const tx = await sendTransaction({
        to: retirementAggregatorV2,
        data: encodeFunctionData({
          abi: KlimaInfinity,
          functionName: 'retireExactCarbonDefault',
          args: [
            bct,
            bct,
            parseEther(retirementParams.maxAmountIn),
            parseEther(retirementParams.retireAmount),
            "",
            retirementParams.beneficiaryAddress || address,
            retirementParams.beneficiaryString,
            retirementParams.retirementMessage,
            0,
          ]
        }),
      });

      setTxHash(tx.hash);
      handleOnStatus("networkConfirmation");
      setIsConfirming(true);

      await tx.wait();
      setIsConfirming(false);
      setIsConfirmed(true);
      
      const successMsg = `Successfully retired ${retirementParams.retireAmount} BCT`;
      handleOnStatus("done", successMsg);
      setSuccessMessage(successMsg);

      resetForm();
    } catch (err) {
      setIsConfirming(false);
      if (err instanceof UserRejectedRequestError) {
        handleOnStatus("error", "Transaction rejected by user");
      } else if (err instanceof BaseError) {
        if (err.message.includes("insufficient funds")) {
          handleOnStatus("error", "Insufficient funds for transaction");
        } else if (err.message.includes("gas required exceeds allowance")) {
          handleOnStatus("error", "Gas estimation failed");
        } else {
          handleOnStatus("error", `Transaction failed: ${err.message}`);
        }
      } else {
        handleOnStatus("error", "Retirement failed - please try again");
      }
      console.error("Error retiring carbon:", err);
    }
  }, [isConnected, chainId, sendTransaction, retirementParams, address, handleOnStatus, resetForm]);

  const handleOnStatus: OnStatusHandler = (status, message) => {
    setTxStatus({ status, message });
  };

  const getOffsetCost = useCallback(async () => {
    if (!retirementParams.retireAmount) return;

    try {
      const retirementAggregatorContract = {
        address: retirementAggregatorV2,
        abi: KlimaInfinity,
      };

      const sourceAmount = await readContract({
        ...retirementAggregatorContract,
        functionName: "getSourceAmountDefaultRetirement",
        args: [
          bct,
          bct,
          parseEther(retirementParams.retireAmount),
        ],
      });

      setEstimatedCost(formatEther(sourceAmount));
    } catch (err) {
      console.error("Error getting offset cost:", err);
    }
  }, [retirementParams.retireAmount]);

  const handleApprove = useCallback(async () => {
    if (!isConnected) return;

    try {
      handleOnStatus("userConfirmation");
      
      const tx = await sendTransaction({
        to: bct,
        data: encodeFunctionData({
          abi: [{
            name: "approve",
            type: "function",
            inputs: [
              { name: "spender", type: "address" },
              { name: "amount", type: "uint256" }
            ],
            outputs: [{ name: "", type: "bool" }]
          }],
          functionName: "approve",
          args: [retirementAggregatorV2, parseEther(retirementParams.maxAmountIn)],
        }),
      });

      handleOnStatus("networkConfirmation");
      await tx.wait();
      handleOnStatus("done", "Approval successful");
      await checkAllowance();
    } catch (err) {
      handleOnStatus("error", "Approval failed");
      console.error("Error approving:", err);
    }
  }, [isConnected, retirementParams.maxAmountIn, sendTransaction, checkAllowance]);

  // Effect to check allowance and get cost when values change
  useEffect(() => {
    if (isConnected && chainId === 137) {
      checkAllowance();
    }
  }, [isConnected, chainId, checkAllowance]);

  // Effect to update cost estimation when retirement amount changes
  useEffect(() => {
    if (isConnected && chainId === 137 && retirementParams.retireAmount) {
      getOffsetCost();
    }
  }, [isConnected, chainId, retirementParams.retireAmount, getOffsetCost]);

  // Add input validation
  const validateInputs = useCallback(() => {
    if (!retirementParams.retireAmount || !retirementParams.maxAmountIn) {
      return false;
    }
    
    const retireAmount = parseFloat(retirementParams.retireAmount);
    const maxAmount = parseFloat(retirementParams.maxAmountIn);
    
    if (isNaN(retireAmount) || isNaN(maxAmount)) {
      return false;
    }
    
    if (retireAmount <= 0 || maxAmount <= 0) {
      return false;
    }
    
    if (maxAmount < retireAmount) {
      return false;
    }
    
    return true;
  }, [retirementParams]);

  const getPolygonScanLink = (hash: string) => {
    return `https://polygonscan.com/tx/${hash}`;
  };

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ 
      paddingTop: context?.client.safeAreaInsets?.top ?? 0, 
      paddingBottom: context?.client.safeAreaInsets?.bottom ?? 0,
      paddingLeft: context?.client.safeAreaInsets?.left ?? 0,
      paddingRight: context?.client.safeAreaInsets?.right ?? 0 ,
    }}>
      <div className="w-[300px] mx-auto py-2 px-2">
        <h1 className="text-2xl font-bold text-center mb-4">{title}</h1>

        <div className="space-y-4">
          {/* Wallet Connection */}
          <div>
            {address && (
              <div className="my-2 text-xs">
                Address: <pre className="inline">{truncateAddress(address)}</pre>
              </div>
            )}

            {chainId && (
              <div className="my-2 text-xs">
                Chain ID: <pre className="inline">{chainId}</pre>
              </div>
            )}

            <Button
              onClick={() =>
                isConnected
                  ? disconnect()
                  : connect({ connector: config.connectors[0] })
              }
            >
              {isConnected ? "Disconnect" : "Connect"}
            </Button>
          </div>

          {/* Network Switching */}
          {isConnected && chainId !== 137 && (
            <div>
              <Button
                onClick={() => switchChain({ chainId: 137 })}
                disabled={isSwitchChainPending}
                isLoading={isSwitchChainPending}
              >
                Switch to Polygon
              </Button>
              {isSwitchChainError && renderError(switchChainError)}
            </div>
          )}

          {/* Retirement Form */}
          {isConnected && chainId === 137 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Retire Carbon</h2>
              
              <div>
                <Label htmlFor="maxAmountIn">Max Amount In (BCT)</Label>
                <Input
                  id="maxAmountIn"
                  value={retirementParams.maxAmountIn}
                  onChange={(e) => {
                    setRetirementParams(prev => ({
                      ...prev,
                      maxAmountIn: e.target.value
                    }));
                    setTxStatus(null); // Clear previous status
                  }}
                  placeholder="0.0"
                  className={parseFloat(retirementParams.maxAmountIn) <= 0 ? "border-red-500" : ""}
                />
              </div>

              <div>
                <Label htmlFor="retireAmount">Amount to Retire (BCT)</Label>
                <Input
                  id="retireAmount"
                  value={retirementParams.retireAmount}
                  onChange={(e) => {
                    setRetirementParams(prev => ({
                      ...prev,
                      retireAmount: e.target.value
                    }));
                    setTxStatus(null); // Clear previous status
                  }}
                  placeholder="0.0"
                  className={parseFloat(retirementParams.retireAmount) <= 0 ? "border-red-500" : ""}
                />
                {parseFloat(retirementParams.retireAmount) > parseFloat(retirementParams.maxAmountIn) && (
                  <div className="text-red-500 text-xs mt-1">
                    Retirement amount cannot exceed max amount
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="beneficiaryAddress">Beneficiary Address (optional)</Label>
                <Input
                  id="beneficiaryAddress"
                  value={retirementParams.beneficiaryAddress}
                  onChange={(e) => setRetirementParams(prev => ({
                    ...prev,
                    beneficiaryAddress: e.target.value
                  }))}
                  placeholder="0x..."
                />
              </div>

              <div>
                <Label htmlFor="beneficiaryString">Beneficiary Name</Label>
                <Input
                  id="beneficiaryString"
                  value={retirementParams.beneficiaryString}
                  onChange={(e) => setRetirementParams(prev => ({
                    ...prev,
                    beneficiaryString: e.target.value
                  }))}
                  placeholder="Beneficiary name"
                />
              </div>

              <div>
                <Label htmlFor="retirementMessage">Retirement Message</Label>
                <Input
                  id="retirementMessage"
                  value={retirementParams.retirementMessage}
                  onChange={(e) => setRetirementParams(prev => ({
                    ...prev,
                    retirementMessage: e.target.value
                  }))}
                  placeholder="Retirement message"
                />
              </div>

              {estimatedCost && (
                <div className="text-sm">
                  Estimated cost: {estimatedCost} BCT
                </div>
              )}

              {parseFloat(allowance) < parseFloat(retirementParams.maxAmountIn) ? (
                <Button
                  onClick={handleApprove}
                  disabled={!retirementParams.maxAmountIn || parseFloat(retirementParams.maxAmountIn) <= 0}
                  isLoading={txStatus?.status === "networkConfirmation"}
                >
                  Approve BCT
                </Button>
              ) : (
                <Button
                  onClick={handleRetireCarbon}
                  disabled={
                    isSendTxPending || 
                    !validateInputs() || 
                    txStatus?.status === "networkConfirmation"
                  }
                  isLoading={txStatus?.status === "networkConfirmation"}
                >
                  Retire Carbon
                </Button>
              )}

              {txStatus && (
                <div className={`text-sm ${
                  txStatus.status === "error" ? "text-red-500" : "text-green-500"
                }`}>
                  {txStatus.status}: {txStatus.message}
                </div>
              )}

              {isSendTxError && renderError(sendTxError)}

              {txHash && (
                <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg space-y-2">
                  <div className="text-sm">
                    Transaction:{" "}
                    <a 
                      href={getPolygonScanLink(txHash)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 underline"
                    >
                      {truncateAddress(txHash)}
                    </a>
                  </div>
                  <div className="text-sm">
                    Status:{" "}
                    {isConfirming ? (
                      <span className="text-yellow-500">Confirming...</span>
                    ) : isConfirmed ? (
                      <span className="text-green-500">Confirmed!</span>
                    ) : (
                      <span className="text-gray-500">Pending</span>
                    )}
                  </div>
                </div>
              )}

              <div className="flex justify-end">
                <Button
                  onClick={resetForm}
                  variant="outline"
                  size="sm"
                  className="text-gray-500"
                >
                  Reset Form
                </Button>
              </div>

              {isCheckingAllowance ? (
                <div className="text-sm text-gray-500">
                  Checking allowance...
                </div>
              ) : (
                <div className="text-sm">
                  Current allowance: {parseFloat(allowance).toFixed(4)} BCT
                </div>
              )}
            </div>
          )}

          {/* Add Frame */}
          <div>
            <div className="mt-2 mb-4 text-sm">
              {added ? "Frame added to client" : "Frame not added to client"}
            </div>

            <Button onClick={addFrame} disabled={added}>
              Add frame to client
            </Button>

            {addFrameResult && (
              <div className="mt-2 text-sm">
                Add frame result: {addFrameResult}
              </div>
            )}
          </div>

          {/* Add success message toast */}
          {successMessage && (
            <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-out">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
const renderError = (error: Error | null) => {
  if (!error) return null;
  if (error instanceof BaseError) {
    const isUserRejection = error.walk(
      (e) => e instanceof UserRejectedRequestError
    );

    if (isUserRejection) {
      return <div className="text-red-500 text-xs mt-1">Rejected by user.</div>;
    }
  }

  return <div className="text-red-500 text-xs mt-1">{error.message}</div>;
};

