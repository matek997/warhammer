import React from 'react';
import './App.css';
import { MainLayout } from './components/containers/MainLayout';
import { Home } from './components/views/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return <Router>
    <MainLayout>
      <Home />
    </MainLayout>
    </Router>
}

export default App;
