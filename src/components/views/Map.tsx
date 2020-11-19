import { Container, Typography } from "@material-ui/core";
import React from "react";
import INetworkData from "../graph/INetworkData";
import INetworkParams from "../graph/INetworkParams";
import { Network } from "../graph/Network";

export const Map = () => {
	const data: INetworkData<{ id: number, label: string }, { from: number, to: number }> = {
		nodes: [

			{ id: 1, label: "Node 1" },
			{ id: 2, label: "Node 2" },
			{ id: 3, label: "Node 3" },
			{ id: 4, label: "Node 4" },
			{ id: 5, label: "Node 5" },
			{ id: 6, label: "Node 6" },
		],
		edges: [
			{ from: 1, to: 3 },
			{ from: 1, to: 2 },
			{ from: 2, to: 4 },
			{ from: 2, to: 5 },
			{ from: 3, to: 3 },
		]
	};
	return <Container>

		<Typography variant="h3" gutterBottom>
			Class map
      </Typography>


		<Network data={data} />

	</Container>
}