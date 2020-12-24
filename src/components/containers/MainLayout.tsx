import { Box } from "@material-ui/core";
import React, { useContext,  useState } from "react";
import { ApiContext } from "../../api/ApiContext";
import { TopBar } from "../TopBar";

export const MainLayout = (props: {
  children?: JSX.Element | JSX.Element[];
}) => {
  const { api } = useContext(ApiContext);
  const [signedin, setSignedin] = useState(false);
  api.api.isSignedin().then(setSignedin);
  console.log("re", signedin);
  return (
    <Box>
      <TopBar user={signedin ? api.api.user : undefined} />
      {props.children}
    </Box>
  );
};
