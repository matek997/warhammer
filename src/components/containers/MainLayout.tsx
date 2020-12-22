import { Box } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Api } from "../../api/Api";
import { ApiContext } from "../../api/ApiContext";
import { TopBar } from "../TopBar";

export const MainLayout = (props: {
  children?: JSX.Element | JSX.Element[];
}) => {
  const { api } = useContext(ApiContext);
  const [signedin, setSignedin] = useState(false);
  useEffect(() => {
    api.isSignedin().then(setSignedin);
  }, [api, setSignedin]);

  return (
    <Box>
      <TopBar user={signedin ? api.user : undefined} />
      {props.children}
    </Box>
  );
};
