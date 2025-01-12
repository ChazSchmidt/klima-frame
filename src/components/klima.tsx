"use client";

import { useEffect, useCallback, useState } from "react";
import { useAccount, useConnect, useDisconnect, useSwitchChain, useChainId } from "wagmi";
import sdk, { AddFrame, FrameNotificationDetails, type Context } from "@farcaster/frame-sdk";
import { config } from "~/components/providers/WagmiProvider";
import { Button } from "~/components/ui/Button";
import { truncateAddress } from "~/lib/truncateAddress";
import { base, optimism } from "wagmi/chains";

export default function Klima(
  { title }: { title?: string } = { title: "Klima Frame" }
) {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<Context.FrameContext>();
  const [added, setAdded] = useState(false);
  const [notificationDetails, setNotificationDetails] = useState<FrameNotificationDetails | null>(null);
  const [addFrameResult, setAddFrameResult] = useState("");

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
          {isConnected && (
            <div>
              <Button
                onClick={handleSwitchChain}
                disabled={isSwitchChainPending}
                isLoading={isSwitchChainPending}
              >
                Switch to {chainId === base.id ? "Optimism" : "Base"}
              </Button>
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

