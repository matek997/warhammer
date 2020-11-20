import React, {  useEffect } from "react";
import { useRef } from "react";
import { DataSet, Network as vNetwork } from "vis-network/standalone"
import INetworkParams from './INetworkParams';
import { Data, Node, Edge } from "vis-network/dist/types/network/Network"


export const Network = <NodeData extends Node,
 EdgeData extends Edge>(props: INetworkParams<NodeData,EdgeData>) => {
    const divRef = useRef<HTMLDivElement>(null);
    const containerElement = <div {...props.container} ref={divRef} ></div>
    useEffect(() => {
        const nodes: any = new DataSet(props.data?.nodes ?? []);
        const edges: any = new DataSet(props.data?.edges ?? []);
        const data = { nodes, edges }


        const network = new vNetwork(divRef.current as HTMLDivElement, data, props.network ?? {});
    });

    return <div>{containerElement}</div>
}