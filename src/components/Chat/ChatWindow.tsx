import {
  CircularProgress,
  Container,
  InputLabel,
  MenuItem,
  Typography,
} from "@material-ui/core";
import * as signalR from "@microsoft/signalr";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import React from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";

type ChatProps = {
  messages: string[];
  onSend: (msg: string) => void;
};
export const ChatWindow = (props: ChatProps) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper></Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper>
          {props.messages.map((msg) => (
            <ChatMessage message={msg} />
          ))}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper>
          <ChatInput onSend={props.onSend} />
        </Paper>
      </Grid>
    </Grid>
  );
};
