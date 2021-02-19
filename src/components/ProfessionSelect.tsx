import Select from "@material-ui/core/Select";
import React from "react";
import { IProfession } from "../models/IProfession";
import { MenuItem } from "@material-ui/core";
import { IdList } from "../api/Api";

export const ProfessionSelect = (props: {
  value?: IProfession | string;
  options: IdList;
  onChange?: (val: string) => void;
}) => {
  return (
    <Select
      value={
        props.value === undefined
          ? ""
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
          props.onChange(event.target.value as string);
        }
      }}
    >
      {props.options.map((el, index) => (
        <MenuItem key={index} value={el.id}>
          {el.label}
        </MenuItem>
      ))}
    </Select>
  );
};
