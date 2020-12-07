import Chip from "@material-ui/core/Chip";
import React from "react";
import { SkillDef } from "../models/SkillDef";
import Avatar from "@material-ui/core/Avatar";
import { Enums, VariableSkills } from "../models/Skills";

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
  if (skill.type === "COMPOSITE") return <span>Comp</span>;

  return <Chip label={getLabel(skill)} color={getColor(skill.type)} />;
};
