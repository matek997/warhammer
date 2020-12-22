import React, { useContext, useEffect, useState } from "react";
// MUI Core
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { ApiContext, getApi } from "../../api/ApiContext";
import Typography from "@material-ui/core/Typography";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

export const Signout = () => {
  const classes = useStyles();
  const [signedin, setSignedin] = useState(true);
  const { api, updateUser } = useContext(ApiContext);
  useEffect(() => {
    api.signout().then((res) => {
      if (res) {
        updateUser(undefined);
        setSignedin(false);
      }
    });
  }, [api, setSignedin, updateUser]);

  return (
    <Container className={classes.container} maxWidth="xs">
      {signedin ? "Signing out" : <Redirect to="/warhammer" />}
    </Container>
  );
};
