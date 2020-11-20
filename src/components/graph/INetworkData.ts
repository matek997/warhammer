import { Node, Edge } from "vis-network/dist/types/network/Network"

export default interface INetworkData<NodeData extends Node, EdgeData extends Edge> {
    nodes?: NodeData[];
    edges?: EdgeData[]
}
