/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface NetworkRegistryInterface extends ethers.utils.Interface {
  functions: {
    "addMember(address)": FunctionFragment;
    "addOperator(address)": FunctionFragment;
    "free()": FunctionFragment;
    "getMembers()": FunctionFragment;
    "getOperators()": FunctionFragment;
    "isMember(address)": FunctionFragment;
    "isOperator(address)": FunctionFragment;
    "members(uint256)": FunctionFragment;
    "operators(uint256)": FunctionFragment;
    "removeMember(address)": FunctionFragment;
    "removeOperator(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addMember", values: [string]): string;
  encodeFunctionData(functionFragment: "addOperator", values: [string]): string;
  encodeFunctionData(functionFragment: "free", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getMembers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOperators",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isMember", values: [string]): string;
  encodeFunctionData(functionFragment: "isOperator", values: [string]): string;
  encodeFunctionData(
    functionFragment: "members",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "operators",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeMember",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeOperator",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addMember", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "free", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getMembers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getOperators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isMember", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOperator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "members", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "operators", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeOperator",
    data: BytesLike
  ): Result;

  events: {
    "MemberAddition(address)": EventFragment;
    "MemberRemoval(address)": EventFragment;
    "OperatorAddition(address)": EventFragment;
    "OperatorRemoval(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MemberAddition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberRemoval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OperatorAddition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OperatorRemoval"): EventFragment;
}

export class NetworkRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: NetworkRegistryInterface;

  functions: {
    addMember(
      member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    free(overrides?: CallOverrides): Promise<[boolean]>;

    getMembers(overrides?: CallOverrides): Promise<[string[]]>;

    getOperators(overrides?: CallOverrides): Promise<[string[]]>;

    isMember(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    isOperator(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    members(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    operators(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    removeMember(
      member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addMember(
    member: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addOperator(
    operator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  free(overrides?: CallOverrides): Promise<boolean>;

  getMembers(overrides?: CallOverrides): Promise<string[]>;

  getOperators(overrides?: CallOverrides): Promise<string[]>;

  isMember(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  isOperator(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  members(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  operators(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  removeMember(
    member: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeOperator(
    operator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addMember(member: string, overrides?: CallOverrides): Promise<void>;

    addOperator(operator: string, overrides?: CallOverrides): Promise<void>;

    free(overrides?: CallOverrides): Promise<boolean>;

    getMembers(overrides?: CallOverrides): Promise<string[]>;

    getOperators(overrides?: CallOverrides): Promise<string[]>;

    isMember(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    isOperator(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    members(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    operators(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    removeMember(member: string, overrides?: CallOverrides): Promise<void>;

    removeOperator(operator: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    MemberAddition(
      member?: string | null
    ): TypedEventFilter<[string], { member: string }>;

    MemberRemoval(
      member?: string | null
    ): TypedEventFilter<[string], { member: string }>;

    OperatorAddition(
      operator?: string | null
    ): TypedEventFilter<[string], { operator: string }>;

    OperatorRemoval(
      operator?: string | null
    ): TypedEventFilter<[string], { operator: string }>;
  };

  estimateGas: {
    addMember(
      member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    free(overrides?: CallOverrides): Promise<BigNumber>;

    getMembers(overrides?: CallOverrides): Promise<BigNumber>;

    getOperators(overrides?: CallOverrides): Promise<BigNumber>;

    isMember(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    isOperator(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    members(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    operators(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeMember(
      member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addMember(
      member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    free(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMembers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOperators(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isMember(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOperator(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    members(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    operators(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeMember(
      member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}