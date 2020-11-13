import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
import { Box, Button, Container, Typography } from '@material-ui/core';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';

function App() {
  ;
  return (
    <Box>
      <AppBar >
  <Toolbar>
    <IconButton   color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6">
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
      <Container maxWidth='sm'>
        a
      </Container>
    </Box>
  );
}

export default App;
