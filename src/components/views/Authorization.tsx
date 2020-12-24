import React, { useEffect, useState } from "react";
import { LoginForm } from "../authorization/LoginFrom";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Redirect } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { IViewProps } from "./IViewProps";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

export const Authorization = (props: IViewProps) => {
  const classes = useStyles();
  const [signedin, setSignedin] = useState(false);
  const { api, refresh } = props;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    api.isSignedin().then(setSignedin);
  }, [api, setSignedin]);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fd = new FormData(event.target as HTMLFormElement);
    const email = fd.get("email") as string;
    const password = fd.get("password") as string;

    setLoading(true);
    api.signin(email, password).then((res) => {
      setLoading(false);
      setSignedin(res);
      refresh();
    });
  };

  return (
    <Container className={classes.container} maxWidth="xs">
      {loading ? (
        <CircularProgress />
      ) : signedin ? (
        <Typography variant="h3" display="block" gutterBottom>
          Signed in as {api.user?.profile.name}
          <Redirect to="/warhammer" />
        </Typography>
      ) : (
        <LoginForm onSubmit={handleSubmit} />
      )}
    </Container>
  );
};
