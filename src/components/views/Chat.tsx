import {
  CircularProgress,
  Container,
  InputLabel,
  MenuItem,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { ChatConnection } from "../../api/Chat/ChatConnection";
import { ChatWindow } from "../Chat/ChatWindow";
import { IViewProps } from "./IViewProps";

export const Chat = (props: IViewProps) => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<string[]>([]);

  let connection = new ChatConnection(props.api);
  const onSend = (msg: string) => {
    connection.send(msg);
  };
  connection.onMessage = (msg) => {
    setMessages(messages.concat([msg]));
  };
  useEffect(() => {
    connection.start().then(() => {
      setLoading(false);
    });
  });

  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : (
        <ChatWindow onSend={onSend} messages={messages} />
      )}
    </Container>
  );
};
