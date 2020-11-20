
import { HTMLAttributes } from "react";
import { Options } from "vis-network/dist/types/network/Network"
import INetworkData from "./INetworkData";
import { Node, Edge } from "vis-network/dist/types/network/Network"

export default interface INetworkParams<NodeData extends Node, EdgeData extends Edge> {
    network?: Options,
    container?: HTMLAttributes<HTMLDivElement>
    data?: INetworkData<NodeData, EdgeData>
}
