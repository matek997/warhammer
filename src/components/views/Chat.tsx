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
import * as signalR from "@microsoft/signalr";

export const Chat = (props: IViewProps) => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<string[]>([]);

  let connection = new ChatConnection(props.api);
  const onSend = (msg: string) => {
    connection.send(msg);
  };
  connection.onMessage = (msg: string) => {
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

/*
export const Chat = (props: IViewProps) => {

  let username =Date.now();
  function bindConnectionMessage(connection: any) {
    var messageCallback = function (...arg: any[]) {
      console.log(arg);
    };
    connection.on("broadcastMessage", messageCallback);
    connection.on("echo", messageCallback);
    connection.onclose(onConnectionError);
  }

  function onConnected(connection: any) {
    console.log("connection started");
    connection.send("broadcastMessage", "_SYSTEMJOINED");

    connection.send("broadcastMessage", "username", "brdcst");

    connection.send("echo", "username", "echo");
  }

  function onConnectionError(error: any) {
    console.error(error.message);
  }

  const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:44342/chat")
    .build();
  bindConnectionMessage(connection);
  connection
    .start()
    .then(() => onConnected(connection))
    .catch((error) => console.error(error.message));

  return <div></div>;
};
*/
