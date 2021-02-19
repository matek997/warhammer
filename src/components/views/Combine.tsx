import React from "react";
import { IViewProps } from "./IViewProps";

export const Combine = (props: IViewProps) => {
  return <div>Temporary unavailable</div>;
};
/*
import { Container, Typography } from "@material-ui/core";
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
const getValidOptions = (viewState: ViewState, profsAll: IdList): IdList => {
  if (viewState.allowUnsafe) return profsAll;
  const advanceTo: string[] = [];
  const current: string[] = [];
  viewState.toCombine.forEach((el) => {
    current.push(el.id);
    el.advanceTo.forEach((id) => {
      advanceTo.push(id);
    });
  });
  const allowed: IdList = [];
  Object.keys(profsAll).forEach((id) => {
    const prof = profsAll[id as Professions];
    if ((advanceTo.includes(id) || !prof.isAdvanced) && !current.includes(id))
      allowed[id] = prof;
  });

  return allowed;
};
export const Combine = (props: IViewProps & { fromState?: ViewState }) => {
  let [viewState, setViewState] = useState(
    props.fromState ??
      ({
        allowUnsafe: false,
        step: 1,
        toCombine: [],
      } as ViewState)
  );
  const [loading, setLoading] = useState(true);
  const [iprofs, setIprofs] = useState([] as IdList); // ProfessionProvider.getAll();
  const [opts, setOpts] = useState(getValidOptions(viewState, iprofs));
  let [selectedOpt, setSelectedOpt] = useState(opts[Object.keys(opts)[0]]);
  const refreshState = () => setViewState(Object.assign({}, viewState));

  useEffect(() => {
    props.api.getProfessionList().then((res) => setIprofs);
    setLoading(false);
  }, [props.api, setIprofs, setLoading]);

  // const handleButtonClick = () => {
  //   console.log(viewState);
  //   viewState.step++;
  //   refreshState();
  // };
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Combine classes
      </Typography>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {/* <Grid item xs={12}>
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
          </Grid>  }

          { <Grid item xs={12}>
            <Paper className={classes.paperFlex}>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={viewState.allowUnsafe}
                      disabled={viewState.step !== 0}
                      onChange={() => {
                        viewState.allowUnsafe = !viewState.allowUnsafe;
                        setOpts(getValidOptions(viewState,props.api));
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
          </Grid> }
          {viewState.step === 1 && (
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paperFlex}>
                {viewState.toCombine.length === 0 && (
                  <div>
                    <InputLabel>Choose starting class</InputLabel>
                    <ProfessionSelect
                      options={opts}
                      value={selectedOpt}
                      onChange={(val) => {
                        setSelectedOpt(val);
                      }}
                    />
                    <Button
                      onClick={() => {
                        viewState.toCombine = [selectedOpt];
                        setOpts(getValidOptions(viewState, iprofs));
                        refreshState();
                      }}
                      variant="contained"
                      color="primary"
                    >
                      Start
                    </Button>
                  </div>
                )}
                {viewState.toCombine.length > 0 && (
                  <div>
                    <div>
                      {viewState.toCombine.map((prof) => {
                        return <ProfessionAccordion profession={prof} />;
                      })}
                    </div>
                    <div>
                      <InputLabel>Choose next class</InputLabel>
                      <ProfessionSelect
                        options={opts}
                        value={selectedOpt}
                        onChange={(val) => {
                          setSelectedOpt(val);
                        }}
                      />
                      <Button
                        onClick={() => {
                          viewState.toCombine.push(selectedOpt);
                          setOpts(getValidOptions(viewState, iprofs));
                          refreshState();
                        }}
                        variant="contained"
                        color="primary"
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                )}
              </Paper>
            </Grid>
          )}
          {viewState.step === 2 && (
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paperFlex}>
                <div className={classes.root}>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <CaptionedText
                      caption="Name"
                      // text={profession.label}
                    >
                      a
                    </CaptionedText>
                    <CaptionedText
                      caption="Role"
                      // text={profession.role}
                    ></CaptionedText>
                  </div>
                  <div>
                    <CaptionedText
                      caption="Description"
                      // text={profession.description}
                    ></CaptionedText>
                  </div>
                </div>
              </Paper>
            </Grid>
          )}
          {viewState.step === 3 && <Grid item xs={12} sm={6}></Grid>}
          {(viewState.step === 1 || viewState.step === 2) && (
            <Grid item xs={12} sm={6}>
              <Paper>
                <Typography variant="h3" display="block" gutterBottom>
                  Result:
                </Typography>
                <ProfessionCard profession={sumProfs(viewState.toCombine)} />
              </Paper>
            </Grid>
          )}
        </Grid>
      </div>
    </Container>
  );
};*/
