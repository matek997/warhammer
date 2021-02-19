import { Box } from "@material-ui/core";
import React, { useState } from "react";
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
  return (
    <Box>
      <TopBar user={api.user} />
      {props.children}
    </Box>
  );
};
