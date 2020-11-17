import { Box } from "@material-ui/core";
import React from "react";
import { TopBar } from "../TopBar";

export const MainLayout = (props:{children?:JSX.Element})=>{
	return(
    <Box>
      <TopBar />
			
			{props.children}
    </Box>
  );
}