import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Routes, Route as RouteType } from "../Routes";
import { Link } from "react-router-dom";
export const TopBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          onClick={() => {
            setOpen(true);
          }}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <List>
            {Routes.map((el: RouteType) => (
              <Link to={el.url}>
                <ListItem button key={el.label}>
                  <ListItemIcon>{el.icon}</ListItemIcon>
                  <ListItemText primary={el.label} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
        <Typography variant="h6">Warhammer</Typography>
        {/* <Button color="inherit"><Typography>Login</Typography></Button> */}
      </Toolbar>
    </AppBar>
  );
};
