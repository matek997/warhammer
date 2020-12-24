import { Box } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { ApiContext } from "../../api/ApiContext";
import { TopBar } from "../TopBar";
import { IViewProps } from "../views/IViewProps";

export const MainLayout = (
  props: IViewProps & {
    children?: JSX.Element | JSX.Element[];
  }
) => {
  const { api } = props;
  const [signedin, setSignedin] = useState(false);
  api.isSignedin().then(setSignedin);
  console.log("re", signedin);
  return (
    <Box>
      <TopBar user={signedin ? api.user : undefined} />
      {props.children}
    </Box>
  );
};
