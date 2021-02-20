import {
  CircularProgress,
  Container,
  InputLabel,
  MenuItem,
  Typography,
} from "@material-ui/core";
import React from "react";

export const ChatMessage = (props: { message: string }) => {
  return (
    <Typography variant="caption" display="block" gutterBottom>
      {props.message}
    </Typography>
  );
};
