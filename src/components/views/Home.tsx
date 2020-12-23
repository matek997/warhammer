import { Container, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { ApiContext, getApi } from "../../api/ApiContext";

export const Home = () => {
  //const { api, updateUser } = useContext(ApiContext);
  return (
    <Container>
      <Typography variant="h1" component="h2" gutterBottom>
        Warhammer
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Character designer for your RPG needs!
      </Typography>
    </Container>
  );
};
