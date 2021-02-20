import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";

type InputProps = {
  onSend: (message: string) => void;
};
export const ChatInput = (props: InputProps) => {
  const [text, setText] = useState("");
  const onChange = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if (evt.key == "Enter") {
      props.onSend(text);
    } else if (evt.key.length === 1) {
      setText(text + evt.key);
    }
  };
  return (
    <div>
      <TextField label="Send message" onKeyUp={onChange} onKeyDown={onChange} />
    </div>
  );
};
