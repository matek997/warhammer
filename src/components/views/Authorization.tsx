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

export const Authorization = (
  props: IViewProps & { action: "SIGNUP" | "SIGNIN" }
) => {
  const classes = useStyles();
  const [signedin, setSignedin] = useState(false);
  const [error, setError] = useState(false);
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
    const handlePromise = (res: boolean) => {
      setLoading(false);
      setSignedin(res);

      if (!res) setError(true);
      refresh();
    };
    if (props.action === "SIGNIN") {
      api.signin(email, password).then(handlePromise);
    } else {
      api.signup(email, password).then(handlePromise);
    }
  };

  return (
    <Container className={classes.container} maxWidth="xs">
      {loading ? (
        <CircularProgress />
      ) : signedin ? (
        <Typography variant="h3" display="block" gutterBottom>
          Signed in as {api.user?.email}
          <Redirect to="/warhammer" />
        </Typography>
      ) : (
        <LoginForm onSubmit={handleSubmit} />
      )}
      {error && (
        <Typography variant="h3" display="block" gutterBottom>
          Something went wrong, make sure your credentials are valid and try
          later.
        </Typography>
      )}
    </Container>
  );
};
