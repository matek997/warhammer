import React from "react";
import { Definition } from "../../misc/Definition";
import { SkillDef } from "../../models/SkillDef";
export const SkillResult = (props: { item: SkillDef | string }) => {
  return (
    <div>
      {typeof props.item === "string"
        ? props.item
        : Definition.from(props.item).toString()}
    </div>
  );
};
