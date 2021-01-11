import { IProfession } from "../models/IProfession";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { CaptionedText } from "./CaptionedText";
import { ProfileTable } from "./ProfileTable";
import { Typography } from "@material-ui/core";
import { SkillChip } from "./SkillChip";
import { useState } from "react";
import { SearchList } from "./SearchList/SearchList";
import { SkillResult } from "./SearchList/SkillResult";
import { QueryTargets, Api } from "../api/Api";
import { TextSearch } from "../api/Search/TextSearch";
import { SkillDef } from "../models/SkillDef";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});
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

export const ProfessionCard = (props: {
  profession: IProfession;
  editable?: boolean;
  api: Api;
  onChange?: (val: IProfession) => void;
}) => {
  const classes = useStyles();
  const chipClasses = chipStyles();
  const { editable } = props;
  const [profession, setProfession] = useState(props.profession);
  return (
    <div className={classes.root}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <CaptionedText
          editable={editable}
          onChange={(label: string) => {
            setProfession(
              Object.assign({}, profession, { label }) as IProfession
            );
            if (props.onChange) props.onChange(profession);
          }}
          caption="Name"
          text={profession.label}
        />
        <CaptionedText
          editable={editable}
          onChange={(role: string) => {
            setProfession(
              Object.assign({}, profession, { role }) as IProfession
            );
            if (props.onChange) props.onChange(profession);
          }}
          caption="Role"
          text={profession.role}
        />
        {profession.isAdvanced && (
          <Typography variant="subtitle2" display="block" gutterBottom>
            {"Advanced Profession"}
          </Typography>
        )}
      </div>
      <div>
        <CaptionedText
          editable={editable}
          multiline
          onChange={(description: string) => {
            setProfession(
              Object.assign({}, profession, { description }) as IProfession
            );
            if (props.onChange) props.onChange(profession);
          }}
          caption="Description"
          text={profession.description}
        />
      </div>
      <div>
        <Typography variant="caption" display="block" gutterBottom>
          Main profile
        </Typography>
        <ProfileTable
          profiles={[{ profile: profession.mainProfile, editable }]}
        />
      </div>
      <div>
        <Typography variant="caption" display="block" gutterBottom>
          Secondary profile
        </Typography>
        <ProfileTable
          profiles={[{ profile: profession.secondaryProfile, editable }]}
        />
      </div>
      <div>
        <CaptionedText caption="Talents" text={profession.talents.join(", ")} />
      </div>
      {!editable && (
        <div>
          <CaptionedText caption="Skills">
            <div className={chipClasses.root}>
              {profession.skills
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
      )}
      {editable && (
        <div>
          <CaptionedText caption="Skills">
            <SearchList
              search={new TextSearch(props.api, QueryTargets.SKILLS)}
              onItemClick={(item: any) => {
                console.log(item);
              }}
              resultComponent={SkillResult}
            />
          </CaptionedText>
        </div>
      )}
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
