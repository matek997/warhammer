import {
  AppBar,
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
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import { CurrentUser } from "../api/User";

type RouteDef = {
  url: string;
  label: string;
  icon: React.ReactNode;
};
const routes: RouteDef[] = [
  { url: "/warhammer", label: "Home", icon: <Home /> },
  { url: "/warhammer/map", label: "Class map", icon: <BubbleChartIcon /> },
  { url: "/warhammer/combine", label: "Combine", icon: <AccountTreeIcon /> },
];

const anonymousRoutes: RouteDef[] = [
  { url: "/warhammer/signup", label: "Sign up", icon: <AssignmentIndIcon /> },
  { url: "/warhammer/signin", label: "Sign in", icon: <MeetingRoomIcon /> },
];
const signedinRoutes: RouteDef[] = [
  { url: "/warhammer/signout", label: "Signout", icon: <MeetingRoomIcon /> },
];

type CloseDrawerCallback = { onClick: () => void };
const MenuLink = (props: RouteDef & CloseDrawerCallback) => (
  <Link onClick={props.onClick} to={props.url}>
    <ListItem key={props.url + "item"} button>
      <ListItemIcon key={props.url + "icon"}>{props.icon}</ListItemIcon>
      <ListItemText key={props.url + "text"} primary={props.label} />
    </ListItem>
  </Link>
);

export const TopBar = (props: { user?: CurrentUser }) => {
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
            {(props.user ? signedinRoutes : anonymousRoutes).map((el) => (
              <MenuLink
                url={el.url}
                icon={el.icon}
                onClick={() => setOpen(false)}
                label={el.label}
              />
            ))}
            {routes.map((el) => (
              <MenuLink
                url={el.url}
                icon={el.icon}
                onClick={() => setOpen(false)}
                label={el.label}
              />
            ))}
          </List>
        </Drawer>
        <Typography variant="h6">Warhammer</Typography>
        {/* <Button color="inherit"><Typography>Login</Typography></Button> */}
      </Toolbar>
    </AppBar>
  );
};
