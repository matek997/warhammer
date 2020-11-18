import React from 'react';
import './App.css';
import { MainLayout } from './components/containers/MainLayout';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Routes } from './Routes';
import { Home } from './components/views/Home';
function App() {
  return <Router>
      <Switch>
    <MainLayout>
            <Route path='/'>
              <Home />
            </Route>
            <Route path='/nav'>
              <Home />
            </Route>
    </MainLayout>
      </Switch>
    </Router>
}

export default App;
