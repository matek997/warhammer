import Chip from "@material-ui/core/Chip";
import React from "react";
import { CompositeSkillDef, SkillDef } from "../models/SkillDef";
import { CaptionedText } from "./CaptionedText";
import { Paper } from "@material-ui/core";
import { Definition } from "../misc/Definition";
// const getSkillAsArray = (skill: CompositeSkillDef) => {};
const getColor = (skillType: string): "primary" | "secondary" | "default" => {
  switch (skillType) {
    case "COMPOSITE":
      return "secondary";
    case "VARIABLE":
      return "primary";
    default:
      return "default";
  }
};

export const SkillChip = (props: { skill: SkillDef }) => {
  const { skill } = props;
  const label = Definition.getLabel(skill);
  if (skill.type !== "COMPOSITE")
    return <Chip label={label} color={getColor(skill.type)} />;

  return (
    <Paper elevation={3}>
      <CaptionedText caption={label}>
        {(skill as CompositeSkillDef).list.map((el, index) => (
          <SkillChip key={index} skill={el} />
        ))}
      </CaptionedText>
    </Paper>
  );
};
