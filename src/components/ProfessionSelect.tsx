import Select from "@material-ui/core/Select";
import React from "react";
import { IProfession } from "../models/IProfession";
import { MenuItem } from "@material-ui/core";

export const ProfessionSelect = (props: {
  value?: IProfession | string;
  options: { [index: string]: IProfession };
  onChange?: (val: IProfession) => void;
}) => {
  return (
    <Select
      value={
        props.value === undefined
          ? undefined
          : typeof props.value === "string"
          ? props.value
          : props.value.id
      }
      onChange={(
        event: React.ChangeEvent<{
          name?: string | undefined;
          value: unknown;
        }>
      ) => {
        if (props.onChange) {
          props.onChange(props.options[event.target.value as string]);
        }
      }}
    >
      {Object.keys(props.options).map((id, index) => (
        <MenuItem key={index} value={id}>
          {props.options[id].label}
        </MenuItem>
      ))}
    </Select>
  );
};
