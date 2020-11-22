import { Container, Typography } from "@material-ui/core";
import React from "react";
import { ProfessionProvider } from "../../data/Provider";
import { NetworkBuilder } from "../../models/NetworkBuilder";
import { Network } from "../graph/Network";

export const Map = () => {
	// const proflist = ;
	const iprofs = ProfessionProvider.getAll();
	const proflist = NetworkBuilder.getAsNetwork(iprofs);
	const opts = {
		physics: false,
		autoResize: true,
		nodes: {},
		edges: {
			arrows: {
				to: true,
			},
		},
	};
	return (
		<Container>
			<Typography variant="h3" gutterBottom>
				Class map
      </Typography>

			<Network
				container={{ style: { height: "80vh" } }}
				network={opts}
				data={proflist}
			/>
		</Container>
	);
};
