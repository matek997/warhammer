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
import { Link } from "react-router-dom";
import Home from "@material-ui/icons/Home";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
const routes = [
  { url: "/warhammer", label: "Home", icon: <Home /> },
  { url: "/warhammer/map", label: "Class map", icon: <BubbleChartIcon /> },
  { url: "/warhammer/combine", label: "Combine", icon: <AccountTreeIcon /> },
];
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
            {routes.map((el) => (
              <Link key={el.url + "link"} to={el.url}>
                <ListItem key={el.url + "item"} button>
                  <ListItemIcon key={el.url + "icon"}>{el.icon}</ListItemIcon>
                  <ListItemText key={el.url + "text"} primary={el.label} />
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
