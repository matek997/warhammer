import React, { useEffect } from "react";
import { useRef } from "react";
import { DataSet, Network as vNetwork } from "vis-network/standalone";
import INetworkParams from "./INetworkParams";
import { Data, Node, Edge } from "vis-network/dist/types/network/Network";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const Network = <NodeData extends Node, EdgeData extends Edge>(
  props: INetworkParams<NodeData, EdgeData>
) => {
  const divRef = useRef<HTMLDivElement>(null);
  const containerElement = <div {...props.container} ref={divRef}></div>;
  useEffect(() => {
    const nodes = new DataSet(props.data?.nodes ?? []);
    const edges = new DataSet(props.data?.edges ?? []);
    const data = { nodes, edges };

    const network = new vNetwork(
      divRef.current as HTMLDivElement,
      data as any,
      props.network ?? {}
    );
    network.on("selectNode", (params) => {
      console.log(params);
      const node: any = nodes.get(params.nodes[0]);
      node.color = getRandomColor();
      ///@ts-ignore
      nodes.update(node);
    });
  });

  return <div>{containerElement}</div>;
};
