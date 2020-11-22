import { Node, Edge } from "vis-network/dist/types/network/Network"
import { DataSet } from "vis-network/standalone";

export default interface INetworkData<NodeData extends Node, EdgeData extends Edge> {
    nodes?: NodeData[] | DataSet<NodeData, 'id'>;
    edges?: EdgeData[] | DataSet<EdgeData, 'id'>;
}
