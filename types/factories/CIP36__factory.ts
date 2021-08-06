/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CIP36, CIP36Interface } from "../CIP36";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
    ],
    name: "CreditLimitUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
    ],
    name: "creditBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
    ],
    name: "creditLimitLeftOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
    ],
    name: "creditLimitOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_limit",
        type: "uint256",
      },
    ],
    name: "setCreditLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506132f5806100206000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80634cd88b76116100b85780639469ea391161007c5780639469ea391461034e57806395d89b411461037e578063a457c2d71461039c578063a9059cbb146103cc578063dd62ed3e146103fc578063f2fde38b1461042c57610137565b80634cd88b76146102be57806370a08231146102da578063715018a61461030a57806379cc6790146103145780638da5cb5b1461033057610137565b806332a92229116100ff57806332a92229146101f6578063395093511461022657806342966c681461025657806349d5034d146102725780634a9a75aa1461028e57610137565b806306fdde031461013c578063095ea7b31461015a57806318160ddd1461018a57806323b872dd146101a8578063313ce567146101d8575b600080fd5b610144610448565b604051610151919061294d565b60405180910390f35b610174600480360381019061016f9190612578565b6104da565b6040516101819190612932565b60405180910390f35b6101926104f8565b60405161019f9190612b6f565b60405180910390f35b6101c260048036038101906101bd9190612529565b610502565b6040516101cf9190612932565b60405180910390f35b6101e0610603565b6040516101ed9190612b8a565b60405180910390f35b610210600480360381019061020b91906124c4565b61060c565b60405161021d9190612b6f565b60405180910390f35b610240600480360381019061023b9190612578565b610686565b60405161024d9190612932565b60405180910390f35b610270600480360381019061026b9190612620565b610732565b005b61028c60048036038101906102879190612578565b610746565b005b6102a860048036038101906102a391906124c4565b610880565b6040516102b59190612b6f565b60405180910390f35b6102d860048036038101906102d391906125b4565b6108fa565b005b6102f460048036038101906102ef91906124c4565b6109e7565b6040516103019190612b6f565b60405180910390f35b610312610a30565b005b61032e60048036038101906103299190612578565b610b6d565b005b610338610bf1565b60405161034591906128ee565b60405180910390f35b610368600480360381019061036391906124c4565b610c1b565b6040516103759190612b6f565b60405180910390f35b610386610d83565b604051610393919061294d565b60405180910390f35b6103b660048036038101906103b19190612578565b610e15565b6040516103c39190612932565b60405180910390f35b6103e660048036038101906103e19190612578565b610f09565b6040516103f39190612932565b60405180910390f35b610416600480360381019061041191906124ed565b610f27565b6040516104239190612b6f565b60405180910390f35b610446600480360381019061044191906124c4565b610fae565b005b60606068805461045790612d38565b80601f016020809104026020016040519081016040528092919081815260200182805461048390612d38565b80156104d05780601f106104a5576101008083540402835291602001916104d0565b820191906000526020600020905b8154815290600101906020018083116104b357829003601f168201915b5050505050905090565b60006104ee6104e761115a565b8484611162565b6001905092915050565b6000606754905090565b600061050f84848461132d565b6000606660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061055a61115a565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156105da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d190612a6f565b60405180910390fd5b6105f7856105e661115a565b85846105f29190612c6d565b611162565b60019150509392505050565b60006006905090565b600060c960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff169050919050565b600061072861069361115a565b8484606660006106a161115a565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546107239190612c17565b611162565b6001905092915050565b61074361073d61115a565b82611351565b50565b61074e61115a565b73ffffffffffffffffffffffffffffffffffffffff1661076c610bf1565b73ffffffffffffffffffffffffffffffffffffffff16146107c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b990612a8f565b60405180910390fd5b6107cb81611527565b60c960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055507fe136e6d0a27c5f8661a7aed0168b607aa2edeb7d0e0a588be613ae5b5ad2db2c8282604051610874929190612909565b60405180910390a15050565b600060c960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff169050919050565b600060019054906101000a900460ff1680610920575060008054906101000a900460ff16155b61095f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095690612a2f565b60405180910390fd5b60008060019054906101000a900460ff1615905080156109af576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6109b98383611583565b6109c1611670565b80156109e25760008060016101000a81548160ff0219169083151502179055505b505050565b6000606560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610a3861115a565b73ffffffffffffffffffffffffffffffffffffffff16610a56610bf1565b73ffffffffffffffffffffffffffffffffffffffff1614610aac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa390612a8f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000610b8083610b7b61115a565b610f27565b905081811015610bc5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bbc90612aaf565b60405180910390fd5b610be283610bd161115a565b8484610bdd9190612c6d565b611162565b610bec8383611351565b505050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060c960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016000820160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681525050905080602001516fffffffffffffffffffffffffffffffff1681600001516fffffffffffffffffffffffffffffffff1610610d3b576000915050610d7e565b610d7a81600001516fffffffffffffffffffffffffffffffff1682602001516fffffffffffffffffffffffffffffffff1661175990919063ffffffff16565b9150505b919050565b606060698054610d9290612d38565b80601f0160208091040260200160405190810160405280929190818152602001828054610dbe90612d38565b8015610e0b5780601f10610de057610100808354040283529160200191610e0b565b820191906000526020600020905b815481529060010190602001808311610dee57829003601f168201915b5050505050905090565b60008060666000610e2461115a565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610ee1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed890612b2f565b60405180910390fd5b610efe610eec61115a565b858584610ef99190612c6d565b611162565b600191505092915050565b6000610f1d610f1661115a565b848461132d565b6001905092915050565b6000606660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610fb661115a565b73ffffffffffffffffffffffffffffffffffffffff16610fd4610bf1565b73ffffffffffffffffffffffffffffffffffffffff161461102a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102190612a8f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561109a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611091906129af565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156111d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c990612b0f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611242576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611239906129cf565b60405180910390fd5b80606660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516113209190612b6f565b60405180910390a3505050565b611337838261176f565b6113428383836119fb565b61134c8282611c7d565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113b890612acf565b60405180910390fd5b6113cd82600083611e4d565b6000606560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611454576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161144b9061298f565b60405180910390fd5b81816114609190612c6d565b606560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081606760008282546114b59190612c6d565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161151a9190612b6f565b60405180910390a3505050565b60006fffffffffffffffffffffffffffffffff821061157b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157290612a4f565b60405180910390fd5b819050919050565b600060019054906101000a900460ff16806115a9575060008054906101000a900460ff16155b6115e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115df90612a2f565b60405180910390fd5b60008060019054906101000a900460ff161590508015611638576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b611640611e52565b61164a8383611f2b565b801561166b5760008060016101000a81548160ff0219169083151502179055505b505050565b600060019054906101000a900460ff1680611696575060008054906101000a900460ff16155b6116d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116cc90612a2f565b60405180910390fd5b60008060019054906101000a900460ff161590508015611725576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61172d611e52565b611735612034565b80156117565760008060016101000a81548160ff0219169083151502179055505b50565b600081836117679190612c6d565b905092915050565b600061177a836109e7565b905081811061178957506119f7565b600060c960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016000820160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168152505090506000611880838561175990919063ffffffff16565b905060006118fa83600001516fffffffffffffffffffffffffffffffff166040518060400160405280601381526020017f496e73756666696369656e74206372656469740000000000000000000000000081525085602001516fffffffffffffffffffffffffffffffff166121b69092919063ffffffff16565b90508181101561193f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161193690612a0f565b60405180910390fd5b61197061196b8385600001516fffffffffffffffffffffffffffffffff1661220b90919063ffffffff16565b611527565b60c960008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055506119f28683612221565b505050505b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611a6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a6290612aef565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611adb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ad29061296f565b60405180910390fd5b611ae6838383611e4d565b6000606560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611b6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b64906129ef565b60405180910390fd5b8181611b799190612c6d565b606560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081606560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611c0b9190612c17565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611c6f9190612b6f565b60405180910390a350505050565b600060c960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016000820160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168152505090506000611d8182600001516fffffffffffffffffffffffffffffffff1684612376565b90506000811415611d93575050611e49565b611dc4611dbf8284600001516fffffffffffffffffffffffffffffffff1661175990919063ffffffff16565b611527565b60c960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550611e468482611351565b50505b5050565b505050565b600060019054906101000a900460ff1680611e78575060008054906101000a900460ff16155b611eb7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611eae90612a2f565b60405180910390fd5b60008060019054906101000a900460ff161590508015611f07576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b8015611f285760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680611f51575060008054906101000a900460ff16155b611f90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f8790612a2f565b60405180910390fd5b60008060019054906101000a900460ff161590508015611fe0576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b8260689080519060200190611ff692919061238f565b50816069908051906020019061200d92919061238f565b50801561202f5760008060016101000a81548160ff0219169083151502179055505b505050565b600060019054906101000a900460ff168061205a575060008054906101000a900460ff16155b612099576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161209090612a2f565b60405180910390fd5b60008060019054906101000a900460ff1615905080156120e9576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b60006120f361115a565b905080603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35080156121b35760008060016101000a81548160ff0219169083151502179055505b50565b60008383111582906121fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121f5919061294d565b60405180910390fd5b5082840390509392505050565b600081836122199190612c17565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612291576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161228890612b4f565b60405180910390fd5b61229d60008383611e4d565b80606760008282546122af9190612c17565b9250508190555080606560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546123059190612c17565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161236a9190612b6f565b60405180910390a35050565b60008183106123855781612387565b825b905092915050565b82805461239b90612d38565b90600052602060002090601f0160209004810192826123bd5760008555612404565b82601f106123d657805160ff1916838001178555612404565b82800160010185558215612404579182015b828111156124035782518255916020019190600101906123e8565b5b5090506124119190612415565b5090565b5b8082111561242e576000816000905550600101612416565b5090565b600061244561244084612bca565b612ba5565b90508281526020810184848401111561245d57600080fd5b612468848285612cf6565b509392505050565b60008135905061247f81613291565b92915050565b600082601f83011261249657600080fd5b81356124a6848260208601612432565b91505092915050565b6000813590506124be816132a8565b92915050565b6000602082840312156124d657600080fd5b60006124e484828501612470565b91505092915050565b6000806040838503121561250057600080fd5b600061250e85828601612470565b925050602061251f85828601612470565b9150509250929050565b60008060006060848603121561253e57600080fd5b600061254c86828701612470565b935050602061255d86828701612470565b925050604061256e868287016124af565b9150509250925092565b6000806040838503121561258b57600080fd5b600061259985828601612470565b92505060206125aa858286016124af565b9150509250929050565b600080604083850312156125c757600080fd5b600083013567ffffffffffffffff8111156125e157600080fd5b6125ed85828601612485565b925050602083013567ffffffffffffffff81111561260a57600080fd5b61261685828601612485565b9150509250929050565b60006020828403121561263257600080fd5b6000612640848285016124af565b91505092915050565b61265281612ca1565b82525050565b61266181612cb3565b82525050565b600061267282612bfb565b61267c8185612c06565b935061268c818560208601612d05565b61269581612e28565b840191505092915050565b60006126ad602383612c06565b91506126b882612e39565b604082019050919050565b60006126d0602283612c06565b91506126db82612e88565b604082019050919050565b60006126f3602683612c06565b91506126fe82612ed7565b604082019050919050565b6000612716602283612c06565b915061272182612f26565b604082019050919050565b6000612739602683612c06565b915061274482612f75565b604082019050919050565b600061275c601383612c06565b915061276782612fc4565b602082019050919050565b600061277f602e83612c06565b915061278a82612fed565b604082019050919050565b60006127a2600f83612c06565b91506127ad8261303c565b602082019050919050565b60006127c5602883612c06565b91506127d082613065565b604082019050919050565b60006127e8602083612c06565b91506127f3826130b4565b602082019050919050565b600061280b602483612c06565b9150612816826130dd565b604082019050919050565b600061282e602183612c06565b91506128398261312c565b604082019050919050565b6000612851602583612c06565b915061285c8261317b565b604082019050919050565b6000612874602483612c06565b915061287f826131ca565b604082019050919050565b6000612897602583612c06565b91506128a282613219565b604082019050919050565b60006128ba601f83612c06565b91506128c582613268565b602082019050919050565b6128d981612cdf565b82525050565b6128e881612ce9565b82525050565b60006020820190506129036000830184612649565b92915050565b600060408201905061291e6000830185612649565b61292b60208301846128d0565b9392505050565b60006020820190506129476000830184612658565b92915050565b600060208201905081810360008301526129678184612667565b905092915050565b60006020820190508181036000830152612988816126a0565b9050919050565b600060208201905081810360008301526129a8816126c3565b9050919050565b600060208201905081810360008301526129c8816126e6565b9050919050565b600060208201905081810360008301526129e881612709565b9050919050565b60006020820190508181036000830152612a088161272c565b9050919050565b60006020820190508181036000830152612a288161274f565b9050919050565b60006020820190508181036000830152612a4881612772565b9050919050565b60006020820190508181036000830152612a6881612795565b9050919050565b60006020820190508181036000830152612a88816127b8565b9050919050565b60006020820190508181036000830152612aa8816127db565b9050919050565b60006020820190508181036000830152612ac8816127fe565b9050919050565b60006020820190508181036000830152612ae881612821565b9050919050565b60006020820190508181036000830152612b0881612844565b9050919050565b60006020820190508181036000830152612b2881612867565b9050919050565b60006020820190508181036000830152612b488161288a565b9050919050565b60006020820190508181036000830152612b68816128ad565b9050919050565b6000602082019050612b8460008301846128d0565b92915050565b6000602082019050612b9f60008301846128df565b92915050565b6000612baf612bc0565b9050612bbb8282612d6a565b919050565b6000604051905090565b600067ffffffffffffffff821115612be557612be4612df9565b5b612bee82612e28565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000612c2282612cdf565b9150612c2d83612cdf565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612c6257612c61612d9b565b5b828201905092915050565b6000612c7882612cdf565b9150612c8383612cdf565b925082821015612c9657612c95612d9b565b5b828203905092915050565b6000612cac82612cbf565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015612d23578082015181840152602081019050612d08565b83811115612d32576000848401525b50505050565b60006002820490506001821680612d5057607f821691505b60208210811415612d6457612d63612dca565b5b50919050565b612d7382612e28565b810181811067ffffffffffffffff82111715612d9257612d91612df9565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f496e73756666696369656e742063726564697400000000000000000000000000600082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f75696e313238206f766572666c6f770000000000000000000000000000000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f7760008201527f616e636500000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61329a81612ca1565b81146132a557600080fd5b50565b6132b181612cdf565b81146132bc57600080fd5b5056fea26469706673582212205c178946c9cec36e06cc65ee46485c51bf32149c2f67667fced9255c5811df4364736f6c63430008020033";

export class CIP36__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CIP36> {
    return super.deploy(overrides || {}) as Promise<CIP36>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CIP36 {
    return super.attach(address) as CIP36;
  }
  connect(signer: Signer): CIP36__factory {
    return super.connect(signer) as CIP36__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CIP36Interface {
    return new utils.Interface(_abi) as CIP36Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): CIP36 {
    return new Contract(address, _abi, signerOrProvider) as CIP36;
  }
}
