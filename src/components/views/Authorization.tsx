import React, { useContext, useEffect, useState } from "react";
// MUI Core
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { ApiContext, getApi } from "../../api/ApiContext";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

export const Authorization = () => {
  const classes = useStyles();
  const [signedin, setSignedin] = useState(false);
  const { api, updateUser } = useContext(ApiContext);
  useEffect(() => {
    api.isSignedin().then(setSignedin);
  }, [api, setSignedin]);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fd = new FormData(event.target as HTMLFormElement);
    const email = fd.get("email") as string;
    const password = fd.get("password") as string;

    api.signin(email, password).then((res) => {
      setSignedin(res);
      updateUser(api.user);
    });
  };

  const form = (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                size="small"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                size="small"
                type="password"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" fullWidth type="submit" variant="contained">
            Log in
          </Button>
        </Grid>
      </Grid>
    </form>
  );
  const signedinMsg = (
    <Typography variant="h3" display="block" gutterBottom>
      Signed in as {api.user?.profile.name}
    </Typography>
  );

  return (
    <Container className={classes.container} maxWidth="xs">
      {signedin ? signedinMsg : form}
    </Container>
  );
};
