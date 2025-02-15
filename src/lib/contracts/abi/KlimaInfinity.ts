const KlimaInfinity = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sourceToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "poolToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxAmountIn",
                "type": "uint256"
            },
            {
                "internalType": "enum LibTransfer.From",
                "name": "fromMode",
                "type": "uint8"
            },
            {
                "internalType": "enum LibTransfer.To",
                "name": "toMode",
                "type": "uint8"
            }
        ],
        "name": "c3RedeemPoolDefault",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "projectTokens",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sourceToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "poolToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "maxAmountIn",
                "type": "uint256"
            },
            {
                "internalType": "address[]",
                "name": "projectTokens",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            },
            {
                "internalType": "enum LibTransfer.From",
                "name": "fromMode",
                "type": "uint8"
            },
            {
                "internalType": "enum LibTransfer.To",
                "name": "toMode",
                "type": "uint8"
            }
        ],
        "name": "c3RedeemPoolSpecific",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "redeemedAmounts",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "enum LibRetire.CarbonBridge",
                "name": "carbonBridge",
                "type": "uint8"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "retiringAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "retiringEntityString",
                "type": "string"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "beneficiaryAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "beneficiaryString",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "retirementMessage",
                "type": "string"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "carbonPool",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "carbonToken",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "retiredAmount",
                "type": "uint256"
            }
        ],
        "name": "CarbonRetired",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "carbonToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "beneficiaryAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "beneficiaryString",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "retirementMessage",
                "type": "string"
            },
            {
                "internalType": "enum LibTransfer.From",
                "name": "fromMode",
                "type": "uint8"
            }
        ],
        "name": "c3RetireExactC3T",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "retirementIndex",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "carbonToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "retiringEntityString",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "beneficiaryAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "beneficiaryString",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "retirementMessage",
                "type": "string"
            },
            {
                "internalType": "enum LibTransfer.From",
                "name": "fromMode",
                "type": "uint8"
            }
        ],
        "name": "c3RetireExactC3TWithEntity",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "retirementIndex",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "projectToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "retiringEntityString",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "beneficiaryAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "beneficiaryString",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "retirementMessage",
                "type": "string"
            },
            {
                "internalType": "enum LibTransfer.From",
                "name": "fromMode",
                "type": "uint8"
            }
        ],
        "name": "icrRetireExactCarbon",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "retirementIndex",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sourceToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "poolToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxAmountIn",
                "type": "uint256"
            },
            {
                "internalType": "enum LibTransfer.From",
                "name": "fromMode",
                "type": "uint8"
            },
            {
                "internalType": "enum LibTransfer.To",
                "name": "toMode",
                "type": "uint8"
            }
        ],
        "name": "toucanRedeemExactCarbonPoolDefault",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "projectTokens",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sourceToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "poolToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "maxAmountIn",
                "type": "uint256"
            },
            {
                "internalType": "address[]",
                "name": "projectTokens",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            },
            {
                "internalType": "enum LibTransfer.From",
                "name": "fromMode",
                "type": "uint8"
            },
            {
                "internalType": "enum LibTransfer.To",
                "name": "toMode",
                "type": "uint8"
            }
        ],
        "name": "toucanRedeemExactCarbonPoolSpecific",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "redeemedAmounts",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "projectToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "retiringAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "retiringEntityString",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "beneficiaryAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "beneficiaryString",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "retirementMessage",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "beneficiaryLocation",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "consumptionCountryCode",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "consumptionPeriodStart",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "consumptionPeriodEnd",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct LibRetire.RetireDetails",
                "name": "details",
                "type": "tuple"
            },
            {
                "internalType": "enum LibTransfer.From",
                "name": "fromMode",
                "type": "uint8"
            }
        ],
        "name": "toucanRetireExactPuroTCO2",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "retirementIndex",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "carbonToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "beneficiaryAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "beneficiaryString",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "retirementMessage",
                "type": "string"
            },
            {
                "internalType": "enum LibTransfer.From",
                "name": "fromMode",
                "type": "uint8"
            }
        ],
        "name": "toucanRetireExactTCO2",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "retirementIndex",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "carbonToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "retiringEntityString",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "beneficiaryAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "beneficiaryString",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "retirementMessage",
                "type": "string"
            },
            {
                "internalType": "enum LibTransfer.From",
                "name": "fromMode",
                "type": "uint8"
            }
        ],
        "name": "toucanRetireExactTCO2WithEntity",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "retirementIndex",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "facetAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "enum IDiamondCut.FacetCutAction",
                        "name": "action",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bytes4[]",
                        "name": "functionSelectors",
                        "type": "bytes4[]"
                    }
                ],
                "indexed": false,
                "internalType": "struct IDiamondCut.FacetCut[]",
                "name": "_diamondCut",
                "type": "tuple[]"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "_init",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "_calldata",
                "type": "bytes"
            }
        ],
        "name": "DiamondCut",
        "type": "event"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "facetAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "enum IDiamondCut.FacetCutAction",
                        "name": "action",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bytes4[]",
                        "name": "functionSelectors",
                        "type": "bytes4[]"
                    }
                ],
                "internalType": "struct IDiamondCut.FacetCut[]",
                "name": "_diamondCut",
                "type": "tuple[]"
            },
            {
                "internalType": "address",
                "name": "_init",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "_calldata",
                "type": "bytes"
            }
        ],
        "name": "diamondCut",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "_functionSelector",
                "type": "bytes4"
            }
        ],
        "name": "facetAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "facetAddress_",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "facetAddresses",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "facetAddresses_",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_facet",
                "type": "address"
            }
        ],
        "name": "facetFunctionSelectors",
        "outputs": [
            {
                "internalType": "bytes4[]",
                "name": "facetFunctionSelectors_",
                "type": "bytes4[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "facets",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "facetAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes4[]",
                        "name": "functionSelectors",
                        "type": "bytes4[]"
                    }
                ],
                "internalType": "struct IDiamondLoupe.Facet[]",
                "name": "facets_",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "_interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "sendDust",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "onERC1155BatchReceived",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "onERC1155Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC721Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address payable",
                "name": "relayerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "functionSignature",
                "type": "bytes"
            }
        ],
        "name": "MetaTransactionExecuted",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "functionSignature",
                "type": "bytes"
            },
            {
                "internalType": "bytes32",
                "name": "sigR",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "sigS",
                "type": "bytes32"
            },
            {
                "internalType": "uint8",
                "name": "sigV",
                "type": "uint8"
            }
        ],
        "name": "executeMetaTransaction",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "getNonce",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "nonce_",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "owner_",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sourceToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "poolToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "maxAmountIn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "retireAmount",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "retiringEntityString",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "beneficiaryAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "beneficiaryString",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "retirementMessage",
                "type": "string"
            },
            {
                "internalType": "enum LibTransfer.From",
                "name": "fromMode",
                "type": "uint8"
            }
        ],
        "name": "retireExactCarbonDefault",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "retirementIndex",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sourceToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "poolToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "projectToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "maxAmountIn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "retireAmount",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "retiringEntityString",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "beneficiaryAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "beneficiaryString",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "retirementMessage",
                "type": "string"
            },
            {
                "internalType": "enum LibTransfer.From",
                "name": "fromMode",
                "type": "uint8"
            }
        ],
        "name": "retireExactCarbonSpecific",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "retirementIndex",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "bytes32",
                        "name": "id",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "remainingAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "unitPrice",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct ICarbonmark.CreditListing",
                "name": "listing",
                "type": "tuple"
            },
            {
                "internalType": "uint256",
                "name": "maxAmountIn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "retireAmount",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "retiringAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "retiringEntityString",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "beneficiaryAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "beneficiaryString",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "retirementMessage",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "beneficiaryLocation",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "consumptionCountryCode",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "consumptionPeriodStart",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "consumptionPeriodEnd",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct LibRetire.RetireDetails",
                "name": "details",
                "type": "tuple"
            },
            {
                "internalType": "enum LibTransfer.From",
                "name": "fromMode",
                "type": "uint8"
            }
        ],
        "name": "retireCarbonmarkListing",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "retirementIndex",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "retirementIndex",
                "type": "uint256"
            }
        ],
        "name": "getRetirementDetails",
        "outputs": [
            {
                "internalType": "address",
                "name": "poolTokenAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "projectTokenAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "beneficiaryAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "beneficiary",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "retirementMessage",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "getTotalCarbonRetired",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "totalCarbonRetired",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "poolToken",
                "type": "address"
            }
        ],
        "name": "getTotalPoolRetired",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "totalPoolRetired",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "projectToken",
                "type": "address"
            }
        ],
        "name": "getTotalProjectRetired",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "getTotalRetirements",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "totalRetirements",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "getTotalRewardsClaimed",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "totalClaimed",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sourceToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "poolToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "maxAmountIn",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "retiringEntityString",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "beneficiaryAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "beneficiaryString",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "retirementMessage",
                "type": "string"
            },
            {
                "internalType": "enum LibTransfer.From",
                "name": "fromMode",
                "type": "uint8"
            }
        ],
        "name": "retireExactSourceDefault",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "retirementIndex",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sourceToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "poolToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "projectToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "maxAmountIn",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "retiringEntityString",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "beneficiaryAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "beneficiaryString",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "retirementMessage",
                "type": "string"
            },
            {
                "internalType": "enum LibTransfer.From",
                "name": "fromMode",
                "type": "uint8"
            }
        ],
        "name": "retireExactSourceSpecific",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "retirementIndex",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sourceToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "carbonToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "getRetireAmountSourceDefault",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sourceToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "carbonToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "getRetireAmountSourceSpecific",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sourceToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "carbonToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "redeemAmount",
                "type": "uint256"
            }
        ],
        "name": "getSourceAmountDefaultRedeem",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amountIn",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sourceToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "carbonToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "retireAmount",
                "type": "uint256"
            }
        ],
        "name": "getSourceAmountDefaultRetirement",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amountIn",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sourceToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "carbonToken",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "redeemAmounts",
                "type": "uint256[]"
            }
        ],
        "name": "getSourceAmountSpecificRedeem",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amountIn",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sourceToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "carbonToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "retireAmount",
                "type": "uint256"
            }
        ],
        "name": "getSourceAmountSpecificRetirement",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amountIn",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sourceToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "carbonToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
            }
        ],
        "name": "getSourceAmountSwapOnly",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amountIn",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "contract IERC20",
                "name": "token",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "int256",
                "name": "delta",
                "type": "int256"
            }
        ],
        "name": "InternalBalanceChanged",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "contract IERC20",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "getAllBalance",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "internalBalance",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "externalBalance",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalBalance",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct TokenFacet.Balance",
                "name": "b",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "contract IERC20[]",
                "name": "tokens",
                "type": "address[]"
            }
        ],
        "name": "getAllBalances",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "internalBalance",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "externalBalance",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalBalance",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct TokenFacet.Balance[]",
                "name": "balances",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "contract IERC20",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "getBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "contract IERC20[]",
                "name": "tokens",
                "type": "address[]"
            }
        ],
        "name": "getBalances",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "balances",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "contract IERC20",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "getExternalBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "contract IERC20[]",
                "name": "tokens",
                "type": "address[]"
            }
        ],
        "name": "getExternalBalances",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "balances",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "contract IERC20",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "getInternalBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "contract IERC20[]",
                "name": "tokens",
                "type": "address[]"
            }
        ],
        "name": "getInternalBalances",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "balances",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "enum LibTransfer.From",
                "name": "fromMode",
                "type": "uint8"
            },
            {
                "internalType": "enum LibTransfer.To",
                "name": "toMode",
                "type": "uint8"
            }
        ],
        "name": "transferToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "enum LibTransfer.From",
                "name": "mode",
                "type": "uint8"
            }
        ],
        "name": "unwrapMatic",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "enum LibTransfer.To",
                "name": "mode",
                "type": "uint8"
            }
        ],
        "name": "wrapMatic",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
] as const;
export default KlimaInfinity;