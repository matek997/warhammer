import React from "react";
import Typography from "@material-ui/core/Typography";

export const CaptionedText = (props: {
  caption: string;
  text?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div>
      <Typography variant="caption" display="block" gutterBottom>
        {props.caption}
      </Typography>
      <Typography component={"div"} variant="body1" gutterBottom>
        {props.text}
        {props.children}
      </Typography>
    </div>
  );
};
