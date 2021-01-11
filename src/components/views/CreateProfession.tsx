import { Container, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import { ProfessionCard } from "../ProfessionCard";
import { ProfessionBuilder } from "../../misc/ProfessionBuilder";
import { IViewProps } from "./IViewProps";

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

export const CreateProfession = (props: IViewProps) => {
  const [profession, setProfession] = useState(
    new ProfessionBuilder().getEmpty()
  );
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Create profession
      </Typography>
      <div className={classes.root}>
        <Paper>
          <ProfessionCard
          api={props.api}
            onChange={setProfession}
            profession={profession}
            editable
          />
        </Paper>
      </div>
    </Container>
  );
};
