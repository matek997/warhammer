import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { ChangeEvent } from "react";

type InputProps = {
  onSend: (message: string) => void;
};
export const ChatInput = (props: InputProps) => {
  const [text, setText] = useState("");
  const onKeyDown = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if (evt.key == "Enter") {
      props.onSend(text);
      setText("");
    }
  };
  return (
    <div>
      <TextField
        label="Send message"
        value={text}
        onKeyDown={onKeyDown}
        onChange={(evt) => setText(evt.target.value)}
      />
    </div>
  );
};
