import { Container, Typography } from "@material-ui/core";
import React from "react";
import Profession from "../../models/Profession";
import INetworkData from "../graph/INetworkData";
import INetworkParams from "../graph/INetworkParams";
import { Network } from "../graph/Network";

export const Map = () => {
  // const proflist = ProfessionProvider.getAll();

  const proflist = Profession.getAsNetwork([
    new Profession("cuttthroat", 0, [3]),
    new Profession("peasant", 1, [0, 2]),
    new Profession("soldier", 2, [4]),
    new Profession("bandit chief", 3),
    new Profession("officer", 4, [3]),
  ]);
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
