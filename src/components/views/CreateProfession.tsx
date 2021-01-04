import {
  Checkbox,
  Container,
  FormControlLabel,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { IProfession } from "../../models/IProfession";
import { InputLabel } from "@material-ui/core";
import { ProfessionProvider } from "../../data/Provider";
import { ProfessionSelect } from "../ProfessionSelect";
import { Professions } from "../../data/Professions";
import { ProfessionAccordion } from "../ProfessionAccordion";
import { ProfessionCard } from "../ProfessionCard";
import { ProfessionBuilder } from "../../misc/ProfessionBuilder";
import { CaptionedText } from "../CaptionedText";
import { IViewProps } from "./IViewProps";
import { Api, IdList } from "../../api/Api";
import { useEffect } from "react";
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
const sumProfs = (profs: IProfession[]) => {
  const builder = new ProfessionBuilder();
  builder.srcList = profs;
  builder.build();
  return builder.profession;
};

export const CreateProfession = (
  props: IViewProps & { fromState?: ViewState }
) => {
  let [viewState, setViewState] = useState(
    props.fromState ??
      ({
        allowUnsafe: false,
        step: 1,
      } as ViewState)
  );
  const refreshState = () => setViewState(Object.assign({}, viewState));

  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Combine classes
      </Typography>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {
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
                    <StepLabel>Configure</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>Finish</StepLabel>
                  </Step>
                </Stepper>
              </Paper>
            </Grid>
          }

          {
            <Grid item xs={12}>
              <Paper className={classes.paperFlex}>
                <div></div>
                <div>
                  <Button
                    onClick={() => {}}
                    variant="contained"
                    color="primary"
                  >
                    Continue
                  </Button>
                </div>
              </Paper>
            </Grid>
          }
          {viewState.step === 1 && (
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paperFlex}>step 1</Paper>
            </Grid>
          )}
          {viewState.step === 2 && (
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paperFlex}>step 2</Paper>
            </Grid>
          )}
          {viewState.step === 2 && (
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paperFlex}>step 2</Paper>
            </Grid>
          )}
          <Grid item xs={12} sm={6}>
            <Paper>
              <Typography variant="h3" display="block" gutterBottom>
                Result:
              </Typography>
              <ProfessionCard profession={sumProfs(viewState.toCombine)} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
