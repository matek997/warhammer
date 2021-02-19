import { makeStyles, Theme, createStyles, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { SkillDef } from "../models/SkillDef";
import { SkillChip } from "./SkillChip";

import { Api } from "../api/Api";

import { CaptionedText } from "./CaptionedText";

const chipStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
  })
);

export const ProfessionSkills = (props: {
  editable: boolean;
  skills: SkillDef[];
  onChange: (newArr: SkillDef[]) => void;
  api: Api;
}) => {
  const { editable, onChange } = props;

  const [skills, setSkills] = useState(props.skills);
  const chipClasses = chipStyles();

  if (editable) {
    return (
      <div>
        <CaptionedText caption="Skills">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              {/* <SearchList
                search={new TextSearch(api, QueryTargets.SKILLS)}
                onItemClick={(item: any) => {
                  console.log(item);
                }}
                resultComponent={SkillResult}
              /> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <CaptionedText caption="Chosen skills"></CaptionedText>
            </Grid>
          </Grid>
        </CaptionedText>
      </div>
    );
  } else {
    return (
      <div>
        <CaptionedText caption="Skills">
          <div className={chipClasses.root}>
            {skills
              .sort((a, b) => {
                const lookup = {
                  BASIC: 0,
                  VARIABLE: 1,
                  COMPOSITE: 2,
                };
                return lookup[a.type] - lookup[b.type];
              })
              .map((skill, index) => (
                <SkillChip key={`${skill.type}.${index}`} skill={skill} />
              ))}
          </div>
        </CaptionedText>
      </div>
    );
  }
};
