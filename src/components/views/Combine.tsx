import { Container, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { IProfession } from "../../models/IProfession";
import { InputLabel } from "@material-ui/core";
import { ProfessionProvider } from "../../data/Provider";
import { ProfessionSelect } from "../ProfessionSelect";
import { Professions } from "../../data/Professions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  paperFlex: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    justifyContent: "space-between",
    display: "flex",
  },
}));
type ViewState = {
  step: number;
  allowUnsafe: boolean;
  toCombine: IProfession[];
};

export const Combine = (props: { fromState?: ViewState }) => {
  let [viewState, setViewState] = useState(
    props.fromState ??
      ({
        allowUnsafe: false,
        step: 0,
        toCombine: [],
      } as ViewState)
  );
  const profsAll = ProfessionProvider.getAll();
  const refreshState = () => setViewState(Object.assign({}, viewState));
  const handleButtonClick = () => {
    console.log(viewState);
    viewState.step++;
    refreshState();
  };
  const classes = useStyles();
  const getValidOptions = () => {
    if (viewState.allowUnsafe) return profsAll;

    const advanceTo: string[] = [];
    const current: string[] = [];
    viewState.toCombine.forEach((el) => {
      current.push(el.id);
      el.advanceTo.forEach((id) => {
        advanceTo.push(id);
      });
    });
    console.log("all");
    const allowed: { [index: string]: IProfession } = {};
    Object.keys(profsAll).forEach((id) => {
      const prof = profsAll[id as Professions];
      if ((advanceTo.includes(id) || !prof.isAdvanced) && !current.includes(id))
        allowed[id] = prof;
    });

    return allowed;
  };
  const opts = getValidOptions();
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Combine classes
      </Typography>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Stepper activeStep={viewState.step}>
                <Step>
                  <StepLabel>Configure settings</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Add classes</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Optimize</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Finish</StepLabel>
                </Step>
              </Stepper>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paperFlex}>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={viewState.allowUnsafe}
                      disabled={viewState.step !== 0}
                      onChange={() => {
                        viewState.allowUnsafe = !viewState.allowUnsafe;
                        refreshState();
                      }}
                      name="unsafe"
                    />
                  }
                  label="Allow any combinations"
                />
              </div>
              <div>
                <Button
                  onClick={handleButtonClick}
                  variant="contained"
                  color="primary"
                >
                  Continue
                </Button>
              </div>
            </Paper>
          </Grid>
          {viewState.step === 1 && (
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paperFlex}>
                {viewState.toCombine.length === 0 && (
                  <div>
                    <InputLabel>Choose starting class</InputLabel>
                    <ProfessionSelect
                      options={opts}
                      value={Object.keys(opts)[0]}
                    />
                  </div>
                )}
              </Paper>
            </Grid>
          )}
          {viewState.step === 2 && (
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paperFlex}></Paper>
            </Grid>
          )}
          {viewState.step === 3 && (
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paperFlex}></Paper>
            </Grid>
          )}
        </Grid>
      </div>
    </Container>
  );
};
