import { IViewProps } from "./IViewProps";
import * as signalR from "@microsoft/signalr";
import React from "react";

const start = () => {
  const generateRandomName = () => Math.random().toString(36).substring(2, 10);

  let username = generateRandomName();
  let promptMessage = "Enter your name:";
  do {
    username = prompt(promptMessage, username) as string;
    if (
      !username ||
      username.startsWith("_") ||
      username.indexOf("<") > -1 ||
      username.indexOf(">") > -1
    ) {
      username = "";
      promptMessage = "Invalid input. Enter your name:";
    }
  } while (!username);

  function createMessageEntry(encodedName: any, encodedMsg: any) {
    console.log(encodedName, encodedMsg);
  }

  function bindConnectionMessage(connection: any) {
    var messageCallback = function (name: any, message: any) {
      if (!message) return;
      console.log(name, message);
    };
    connection.on("broadcastMessage", messageCallback);
    connection.on("echo", messageCallback);
    connection.onclose(onConnectionError);
  }

  function onConnected(connection: any) {
    console.log("connection started");
    connection.send("broadcastMessage", "_SYSTEM_", username + " JOINED");
    connection.send("broadcastMessage", username, "messageInput.value");

    connection.send("echo", username, "messageInput.value");
  }

  function onConnectionError(error: any) {
    if (error && error.message) {
      console.error(error.message);
    }
  }

  const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:44342/chat")
    .build();
  bindConnectionMessage(connection);
  connection
    .start()
    .then(() => onConnected(connection))
    .catch((error) => console.error(error.message));
};
export const Chat = (props: IViewProps) => {
  return (
    <div>
      <button onClick={start}>btn</button>
    </div>
  );
};
