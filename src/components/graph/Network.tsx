import React, { useEffect } from "react";
import { useRef } from "react";
import { DataSet, Network as vNetwork } from "vis-network/standalone";
import INetworkParams, { EventFunction } from "./INetworkParams";
import { Node, Edge } from "vis-network/dist/types/network/Network";
import { NetworkEvents } from "vis-network/declarations/network/Network";

export const Network = <NodeData extends Node, EdgeData extends Edge>(
  props: INetworkParams<NodeData, EdgeData>
) => {
  const divRef = useRef<HTMLDivElement>(null);
  const containerElement = <div {...props.container} ref={divRef}></div>;
  useEffect(() => {
    const nodes =
      props.data?.nodes instanceof DataSet
        ? props.data.nodes
        : new DataSet(props.data?.nodes ?? []);
    const edges =
      props.data?.edges instanceof DataSet
        ? props.data.edges
        : new DataSet(props.data?.edges ?? []);
    const data = { nodes, edges };

    const network = new vNetwork(
      divRef.current as HTMLDivElement,
      data as any,
      props.network ?? {}
    );

    for (const evName in props.events ?? {}) {
      const func = props.events![evName as NetworkEvents];
      network.on(evName as NetworkEvents, func as EventFunction);
    }
  });

  return <div>{containerElement}</div>;
};
