import { Container, InputLabel, MenuItem, Typography } from "@material-ui/core";
import React from "react";
import { Options } from "vis-network/dist/types/network/Network";
import { ProfessionProvider } from "../../data/Provider";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import { Network } from "../graph/Network";
import { useState } from "react";
import { NetworkBuilder } from "../graph/NetworkBuilder";
import { Professions } from "../../data/Professions";
import { CharacterCard } from "../CharacterCard";
import { ProfessionSelect } from "../ProfessionSelect";
import { IProfession } from "../../models/IProfession";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const Map = () => {
  // const proflist = ;
  const iprofs = ProfessionProvider.getAll();
  const [depth, setDepth] = useState(1);
  const [direction, setDirection] = useState(
    "FORWARD" as "FORWARD" | "BACK" | "BOTH"
  );
  const [focus, setFocus] = useState(
    iprofs[Object.keys(iprofs)[0] as Professions]
  );
  const classes = useStyles();

  const opts: Options = {
    autoResize: true,
    nodes: {},
    layout: {
      hierarchical: {
        enabled: false,
        levelSeparation: 150,
        nodeSpacing: 100,
        treeSpacing: 200,
        blockShifting: true,
        edgeMinimization: true,
        parentCentralization: true,
        direction: "UD", // UD, DU, LR, RL
        sortMethod: "hubsize", // hubsize, directed
        shakeTowards: "leaves", // roots, leaves
      },
    },
    physics: false,
    edges: {
      arrows: {
        to: true,
      },
    },
  };

  const handleChange = (val: IProfession) => {
    setFocus(val);
  };
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Class map
      </Typography>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div
                style={{
                  display: "flex",
                  flexFlow: "row",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <InputLabel>Class</InputLabel>
                  <ProfessionSelect
                    onChange={handleChange}
                    options={iprofs}
                    value={iprofs["ABBOT"]}
                  />
                </div>
                <div>
                  <InputLabel>Follow related classes</InputLabel>
                  <Select
                    value={depth}
                    onChange={(ev) => {
                      setDepth(parseInt(ev.target.value as string));
                    }}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </div>
                <div>
                  <InputLabel>Direction</InputLabel>
                  <Select
                    value={direction}
                    onChange={(ev) => {
                      setDirection(
                        ev.target.value as "FORWARD" | "BACK" | "BOTH"
                      );
                    }}
                  >
                    <MenuItem value={"BACK"}>Back only</MenuItem>
                    <MenuItem value={"FORWARD"}>Forward only</MenuItem>
                    <MenuItem value={"BOTH"}>Both</MenuItem>
                  </Select>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <CharacterCard profession={focus} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Network
                container={{ style: { height: "80vh", width: "100%" } }}
                network={opts}
                events={{
                  selectNode: (params) => {
                    const profId = params.nodes[0] as Professions;
                    const prof = iprofs[profId];
                    if (prof === undefined) return;
                    setFocus(prof);
                  },
                }}
                data={new NetworkBuilder(focus).buildNetwork(direction, depth)}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
