import React from "react";
import { IViewProps } from "./IViewProps";

export const Chat = (props: IViewProps) => {
  var userName = "test" + Date.now();

  // eslint-disable-next-line no-restricted-globals
  var protocol = location.protocol === "https:" ? "wss:" : "ws:";
  var wsUri = protocol + "//" + window.location.host;
  var socket = new WebSocket(wsUri);
  socket.onopen = (e) => {
    console.log("socket opened", e);
  };

  socket.onclose = function (e) {
    console.log("socket closed", e);
  };

  socket.onmessage = function (e) {
    console.log(e);
    //  $("#msgs").append(e.data + "<br />");
  };

  socket.onerror = function (e) {
    console.log(e);
  };

  //  $("#MessageField").keypress(function (e) {
  //    if (e.which != 13) {
  //      return;
  //    }

  //    e.preventDefault();

  //    var message = userName + ": " + $("#MessageField").val();
  //    socket.send(message);
  //    $("#MessageField").val("");
  //  });
  return <div>Chat</div>;
};
