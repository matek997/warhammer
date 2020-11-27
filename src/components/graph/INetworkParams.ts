
import { HTMLAttributes } from "react";
import { Options } from "vis-network/dist/types/network/Network"
import INetworkData from "./INetworkData";
import { Node, Edge } from "vis-network/dist/types/network/Network"
import { NetworkEvents } from "vis-network/declarations/network/Network";


export type EventFunction = ((params?: any) => void)
export default interface INetworkParams<NodeData extends Node, EdgeData extends Edge> {
    network?: Options,
    container?: HTMLAttributes<HTMLDivElement>
    data?: INetworkData<NodeData, EdgeData>
    events?: {
        [index in NetworkEvents]?: EventFunction
    }
}
