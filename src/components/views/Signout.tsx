import React, { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import { IViewProps } from "./IViewProps";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

export const Signout = (props: IViewProps) => {
  const classes = useStyles();
  const [signedin, setSignedin] = useState(true);
  const { api, refresh } = props;
  useEffect(() => {
    api.signout().then((res) => {
      if (res) {
        setSignedin(false);
        refresh();
      }
    });
  }, [api, setSignedin, refresh]);

  return (
    <Container className={classes.container} maxWidth="xs">
      {signedin ? <CircularProgress /> : <Redirect to="/warhammer" />}
    </Container>
  );
};
