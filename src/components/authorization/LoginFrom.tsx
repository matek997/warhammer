import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";
import React from "react";

type LoginFormProps = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};
export const LoginForm = (props: LoginFormProps) => {
  return (
    <form onSubmit={props.onSubmit}>
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
                type="email"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
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
};
