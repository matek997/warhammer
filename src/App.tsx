import React from 'react';
import './App.css';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { MainLayout } from './components/containers/MainLayout';
import { Home } from './components/views/Home';

function App() {
  return <MainLayout>
      <Home />
    </MainLayout>
}

export default App;
