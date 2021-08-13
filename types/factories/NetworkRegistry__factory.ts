/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NetworkRegistry,
  NetworkRegistryInterface,
} from "../NetworkRegistry";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "MemberAddition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "MemberRemoval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "OperatorAddition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "OperatorRemoval",
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
    inputs: [
      {
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "addMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "addOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMembers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOperators",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_members",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_operators",
        type: "address[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isMember",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isOperator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "members",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "operators",
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
    inputs: [
      {
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "removeMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "removeOperator",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x608060405234801561001057600080fd5b5061264e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80639870d7fe1161008c578063ac8a584a11610066578063ac8a584a14610237578063ca6d56dc14610253578063e28d49061461026f578063f2fde38b1461029f576100ea565b80639870d7fe146101cd5780639eab5253146101e9578063a230c52414610207576100ea565b80636d70f7ae116100c85780636d70f7ae14610159578063715018a61461018957806373cf25f8146101935780638da5cb5b146101af576100ea565b80630b1ca49a146100ef57806327a099d81461010b5780635daf08ca14610129575b600080fd5b61010960048036038101906101049190611d27565b6102bb565b005b61011361060f565b6040516101209190612015565b60405180910390f35b610143600480360381019061013e9190611dcc565b61069d565b6040516101509190611ffa565b60405180910390f35b610173600480360381019061016e9190611d27565b6106dc565b6040516101809190612037565b60405180910390f35b6101916106fc565b005b6101ad60048036038101906101a89190611d54565b610839565b005b6101b7610cbf565b6040516101c49190611ffa565b60405180910390f35b6101e760048036038101906101e29190611d27565b610ce9565b005b6101f1610f79565b6040516101fe9190612015565b60405180910390f35b610221600480360381019061021c9190611d27565b611007565b60405161022e9190612037565b60405180910390f35b610251600480360381019061024c9190611d27565b611027565b005b61026d60048036038101906102689190611d27565b6113f1565b005b61028960048036038101906102849190611dcc565b611681565b6040516102969190611ffa565b60405180910390f35b6102b960048036038101906102b49190611d27565b6116c0565b005b33606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610348576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033f90612112565b60405180910390fd5b81606560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166103d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103cc90612172565b60405180910390fd5b6000606560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060005b6001606880549050610442919061222d565b81101561057f578373ffffffffffffffffffffffffffffffffffffffff166068828154811061047457610473612381565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561056c57606860016068805490506104cf919061222d565b815481106104e0576104df612381565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166068828154811061051f5761051e612381565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061057f565b8080610577906122da565b915050610430565b50606880548061059257610591612352565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558273ffffffffffffffffffffffffffffffffffffffff167f270bfc616dd36d5cb6b35aac93e6ef22b089c34e6f6ad6f0892797424840897b60405160405180910390a2505050565b6060606780548060200260200160405190810160405280929190818152602001828054801561069357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610649575b5050505050905090565b606881815481106106ad57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60666020528060005260406000206000915054906101000a900460ff1681565b61070461186c565b73ffffffffffffffffffffffffffffffffffffffff16610722610cbf565b73ffffffffffffffffffffffffffffffffffffffff1614610778576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076f906120f2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600060019054906101000a900460ff168061085f575060008054906101000a900460ff16155b61089e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610895906120d2565b60405180910390fd5b60008060019054906101000a900460ff1615905080156108ee576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6108f6611874565b60005b8351811015610a4b576065600085838151811061091957610918612381565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161580156109bd5750600073ffffffffffffffffffffffffffffffffffffffff1684828151811061099c5761099b612381565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614155b6109c657600080fd5b6001606560008684815181106109df576109de612381565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508080610a43906122da565b9150506108f9565b5060005b8251811015610ba15760666000848381518110610a6f57610a6e612381565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16158015610b135750600073ffffffffffffffffffffffffffffffffffffffff16838281518110610af257610af1612381565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614155b610b1c57600080fd5b600160666000858481518110610b3557610b34612381565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508080610b99906122da565b915050610a4f565b508260689080519060200190610bb8929190611bb8565b508160679080519060200190610bcf929190611bb8565b506067610bda610cbf565b9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160666000610c48610cbf565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508015610cba5760008060016101000a81548160ff0219169083151502179055505b505050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b33606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610d76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6d90612112565b60405180910390fd5b81606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610e04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dfb906120b2565b60405180910390fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610e75576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6c90612072565b60405180910390fd5b6001606660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506067849080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff167fe96a56aa17dd8ae64ac3a51347e8e8a03d52f1cb2acdf8ed49b20d55662ebecc60405160405180910390a250505050565b60606068805480602002602001604051908101604052809291908181526020018280548015610ffd57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610fb3575b5050505050905090565b60656020528060005260406000206000915054906101000a900460ff1681565b33606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166110b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ab90612112565b60405180910390fd5b81606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611141576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113890612132565b60405180910390fd5b611149610cbf565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156111b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ae90612152565b60405180910390fd5b6000606660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060005b6001606780549050611224919061222d565b811015611361578373ffffffffffffffffffffffffffffffffffffffff166067828154811061125657611255612381565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561134e57606760016067805490506112b1919061222d565b815481106112c2576112c1612381565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166067828154811061130157611300612381565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611361565b8080611359906122da565b915050611212565b50606780548061137457611373612352565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558273ffffffffffffffffffffffffffffffffffffffff167f108286147377add4f5f7bcdd7b6104dc6bdac3443e499142a612d418aa0be15460405160405180910390a2505050565b33606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661147e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161147590612112565b60405180910390fd5b81606560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561150c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150390612092565b60405180910390fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561157d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157490612072565b60405180910390fd5b6001606560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506068849080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff167f72114e270de66b9d2710ecf140403e5e99b1574767d6a8197bdc8d807a46e7c760405160405180910390a250505050565b6067818154811061169157600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6116c861186c565b73ffffffffffffffffffffffffffffffffffffffff166116e6610cbf565b73ffffffffffffffffffffffffffffffffffffffff161461173c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611733906120f2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156117ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117a390612052565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b600060019054906101000a900460ff168061189a575060008054906101000a900460ff16155b6118d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118d0906120d2565b60405180910390fd5b60008060019054906101000a900460ff161590508015611929576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61193161195d565b611939611a36565b801561195a5760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680611983575060008054906101000a900460ff16155b6119c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119b9906120d2565b60405180910390fd5b60008060019054906101000a900460ff161590508015611a12576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b8015611a335760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680611a5c575060008054906101000a900460ff16155b611a9b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a92906120d2565b60405180910390fd5b60008060019054906101000a900460ff161590508015611aeb576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6000611af561186c565b905080603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3508015611bb55760008060016101000a81548160ff0219169083151502179055505b50565b828054828255906000526020600020908101928215611c31579160200282015b82811115611c305782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190611bd8565b5b509050611c3e9190611c42565b5090565b5b80821115611c5b576000816000905550600101611c43565b5090565b6000611c72611c6d846121b7565b612192565b90508083825260208201905082856020860282011115611c9557611c946123e4565b5b60005b85811015611cc55781611cab8882611ccf565b845260208401935060208301925050600181019050611c98565b5050509392505050565b600081359050611cde816125ea565b92915050565b600082601f830112611cf957611cf86123df565b5b8135611d09848260208601611c5f565b91505092915050565b600081359050611d2181612601565b92915050565b600060208284031215611d3d57611d3c6123ee565b5b6000611d4b84828501611ccf565b91505092915050565b60008060408385031215611d6b57611d6a6123ee565b5b600083013567ffffffffffffffff811115611d8957611d886123e9565b5b611d9585828601611ce4565b925050602083013567ffffffffffffffff811115611db657611db56123e9565b5b611dc285828601611ce4565b9150509250929050565b600060208284031215611de257611de16123ee565b5b6000611df084828501611d12565b91505092915050565b6000611e058383611e11565b60208301905092915050565b611e1a81612261565b82525050565b611e2981612261565b82525050565b6000611e3a826121f3565b611e44818561220b565b9350611e4f836121e3565b8060005b83811015611e80578151611e678882611df9565b9750611e72836121fe565b925050600181019050611e53565b5085935050505092915050565b611e9681612273565b82525050565b6000611ea960268361221c565b9150611eb482612404565b604082019050919050565b6000611ecc60188361221c565b9150611ed782612453565b602082019050919050565b6000611eef60158361221c565b9150611efa8261247c565b602082019050919050565b6000611f1260178361221c565b9150611f1d826124a5565b602082019050919050565b6000611f35602e8361221c565b9150611f40826124ce565b604082019050919050565b6000611f5860208361221c565b9150611f638261251d565b602082019050919050565b6000611f7b60178361221c565b9150611f8682612546565b602082019050919050565b6000611f9e60178361221c565b9150611fa98261256f565b602082019050919050565b6000611fc1601b8361221c565b9150611fcc82612598565b602082019050919050565b6000611fe460158361221c565b9150611fef826125c1565b602082019050919050565b600060208201905061200f6000830184611e20565b92915050565b6000602082019050818103600083015261202f8184611e2f565b905092915050565b600060208201905061204c6000830184611e8d565b92915050565b6000602082019050818103600083015261206b81611e9c565b9050919050565b6000602082019050818103600083015261208b81611ebf565b9050919050565b600060208201905081810360008301526120ab81611ee2565b9050919050565b600060208201905081810360008301526120cb81611f05565b9050919050565b600060208201905081810360008301526120eb81611f28565b9050919050565b6000602082019050818103600083015261210b81611f4b565b9050919050565b6000602082019050818103600083015261212b81611f6e565b9050919050565b6000602082019050818103600083015261214b81611f91565b9050919050565b6000602082019050818103600083015261216b81611fb4565b9050919050565b6000602082019050818103600083015261218b81611fd7565b9050919050565b600061219c6121ad565b90506121a882826122a9565b919050565b6000604051905090565b600067ffffffffffffffff8211156121d2576121d16123b0565b5b602082029050602081019050919050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006122388261229f565b91506122438361229f565b92508282101561225657612255612323565b5b828203905092915050565b600061226c8261227f565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6122b2826123f3565b810181811067ffffffffffffffff821117156122d1576122d06123b0565b5b80604052505050565b60006122e58261229f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561231857612317612323565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f696e76616c6964206f70657261746f7220616464726573730000000000000000600082015250565b7f6d656d62657220616c7265616479206578697374730000000000000000000000600082015250565b7f6f70657261746f7220616c726561647920657869737473000000000000000000600082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f61646472657373206973206e6f74206f70657261746f72000000000000000000600082015250565b7f6f70657261746f7220646f6573206e6f74206578697374000000000000000000600082015250565b7f63616e27742072656d6f7665206f776e6572206f70657261746f720000000000600082015250565b7f6d656d62657220646f6573206e6f742065786973740000000000000000000000600082015250565b6125f381612261565b81146125fe57600080fd5b50565b61260a8161229f565b811461261557600080fd5b5056fea2646970667358221220b3a8b2e22812ac13f67a2612e32dc0b25a041c26e2857d147ce4593c54c5083464736f6c63430008070033";

export class NetworkRegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NetworkRegistry> {
    return super.deploy(overrides || {}) as Promise<NetworkRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NetworkRegistry {
    return super.attach(address) as NetworkRegistry;
  }
  connect(signer: Signer): NetworkRegistry__factory {
    return super.connect(signer) as NetworkRegistry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NetworkRegistryInterface {
    return new utils.Interface(_abi) as NetworkRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NetworkRegistry {
    return new Contract(address, _abi, signerOrProvider) as NetworkRegistry;
  }
}
