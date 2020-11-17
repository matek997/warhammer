import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@material-ui/core"
import React from "react"
import MenuIcon from '@material-ui/icons/Menu';
import SignalWifi2Bar from '@material-ui/icons/SignalWifi2Bar'
import { useState } from "react";
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export const TopBar = ()=>{
  const [open,setOpen] = useState(false);
	return       <AppBar position='sticky' >
  <Toolbar>
    <IconButton onClick={()=>{setOpen(true);}}   color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Drawer anchor='left' open={open} onClose={()=>setOpen(false)}>
        <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon><SignalWifi2Bar /></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
    </Drawer>
    <Typography variant="h6">
      Warhammer
    </Typography>
    <Button color="inherit"><Typography>Login</Typography></Button>
  </Toolbar>
</AppBar>
}