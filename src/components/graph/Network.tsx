import React, { HTMLAttributes, useEffect } from "react";
import { useRef } from "react";
import { DataSet, Network as vNetwork } from "vis-network/standalone"
import INetworkParams from './INetworkParams';

export const Network = (props: INetworkParams) => {
    console.log(props)
    const d = props.data;
    const divRef = useRef<HTMLDivElement>(null);
    const containerElement = <div {...props.container} ref={divRef} ></div>
    useEffect(() => {
        // const network = new vNetwork(divRef.current as HTMLDivElement, props.data ?? {}, props.network);
        const nodes: any = new DataSet(d?.nodes ?? []);
        const edges: any = new DataSet(d?.edges ?? []);
        const data = { nodes, edges }


        const network = new vNetwork(divRef.current as HTMLDivElement, data, props.network ?? {});
    });

    return containerElement
}