import { IProfession } from "../models/IProfession";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CaptionedText } from "./CaptionedText";
import { ProfileTable } from "./ProfileTable";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export const CharacterCard = (props: { profession: IProfession }) => {
  const classes = useStyles();
  const { profession } = props;
  return (
    <div className={classes.root}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <CaptionedText caption="Name" text={profession.label} />
        <CaptionedText caption="Role" text={profession.role} />
      </div>
      <div>
        <CaptionedText caption="Description" text={profession.description} />
      </div>
      <div>
        <Typography variant="caption" display="block" gutterBottom>
          Main profile
        </Typography>
        <ProfileTable profiles={[profession.mainProfile]} />
      </div>
      <div>
        <Typography variant="caption" display="block" gutterBottom>
          Secondary profile
        </Typography>
        <ProfileTable profiles={[profession.secondaryProfile]} />
      </div>
      <div>
        <CaptionedText caption="Talents" text={profession.talents.join(", ")} />
      </div>
      <div>
        <CaptionedText caption="Skills" text={profession.skills.join(", ")} />
      </div>
    </div>
  );
};
/*
  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h2" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
    </div>
  );
*/
