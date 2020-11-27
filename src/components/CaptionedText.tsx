import React from "react";
import Typography from "@material-ui/core/Typography";

export const CaptionedText = (props: { caption: string; text: string }) => {
  return (
    <div>
      <Typography variant="caption" display="block" gutterBottom>
        {props.caption}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {props.text}
      </Typography>
    </div>
  );
};
