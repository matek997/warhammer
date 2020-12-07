import Chip from "@material-ui/core/Chip";
import React from "react";
import { SkillDef } from "../models/SkillDef";
import { Enums, VariableSkills } from "../models/Skills";
import { CaptionedText } from "./CaptionedText";
import { Paper } from "@material-ui/core";

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
const getLabel = (skill: SkillDef) => {
  if (skill.type === "COMPOSITE")
    return skill.operator === "OR" ? "One of..." : "All of";
  const target: any = (Enums as any)[skill.targetEnum] ?? {};

  let text = target[skill.key] ?? skill.key;
  if (skill.type === "VARIABLE") {
    text = `${(VariableSkills as any)[skill.targetEnum]}: ${text}`;
  }
  return text;
};
export const SkillChip = (props: { skill: SkillDef }) => {
  const { skill } = props;
  const label = getLabel(skill);
  if (skill.type !== "COMPOSITE")
    return <Chip label={label} color={getColor(skill.type)} />;

  return (
    <Paper elevation={3}>
      <CaptionedText caption={label}>
        {skill.list.map((el, index) => (
          <SkillChip key={index} skill={el} />
        ))}
      </CaptionedText>
    </Paper>
  );
};
