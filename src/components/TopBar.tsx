import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core"
import React from "react"
import MenuIcon from '@material-ui/icons/Menu';

export const TopBar = ()=>{

	return       <AppBar position='sticky' >
  <Toolbar>
    <IconButton   color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6">
      Warhammer
    </Typography>
    <Button color="inherit"><Typography>Login</Typography></Button>
  </Toolbar>
</AppBar>
}