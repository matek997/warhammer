import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export const CaptionedText = (props: {
  caption: string;
  text?: string;
  editable?: boolean;
  multiline?: boolean;
  onChange?: (val: string) => void;
  children?: React.ReactNode;
}) => {
  const [val, setVal] = useState(props.text);
  const text = (
    <TextField
      fullWidth
      value={val}
      multiline={props.multiline}
      name={props.caption}
      size="small"
      onChange={(ev) => {
        const newVal = ev.target.value;
        setVal(newVal);
        if (props.onChange) props.onChange(newVal);
      }}
      variant="outlined"
    />
  );
  return (
    <div>
      <Typography variant="caption" display="block" gutterBottom>
        {props.caption}
      </Typography>
      <Typography component={"div"} variant="body1" gutterBottom>
        {props.editable ? text : props.text}
        {props.children}
      </Typography>
    </div>
  );
};
