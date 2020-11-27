
import { HTMLAttributes } from "react";
import { IdType, Options } from "vis-network/dist/types/network/Network"
import INetworkData from "./INetworkData";
import { Node, Edge } from "vis-network/dist/types/network/Network"
import { NetworkEvents } from "vis-network/declarations/network/Network";


type PointerLocation = { x: number, y: number }
export type EventArguments = {
    edges: IdType[];
    event: any;
    nodes: IdType[];
    pointer: {
        DOM: PointerLocation;
        canvas: PointerLocation;
    }
}
export type EventFunction = ((params: EventArguments) => void)
export default interface INetworkParams<NodeData extends Node, EdgeData extends Edge> {
    network?: Options,
    container?: HTMLAttributes<HTMLDivElement>
    data?: INetworkData<NodeData, EdgeData>
    events?: {
        [index in NetworkEvents]?: EventFunction
    }
}
