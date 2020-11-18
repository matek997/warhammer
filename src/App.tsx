import React from 'react';
import './App.css';
import { MainLayout } from './components/containers/MainLayout';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Home } from './components/views/Home';
import {Map} from './components/views/Map';
function App() {
  return <Router>
      <Switch>
    <MainLayout>
            <Route path='/' exact>
              <Home />
            </Route>
            {/* <Route path='/nav' exact>
              <Home />
            </Route> */}
            <Route path='/map' exact>
              <Map />
            </Route>
    </MainLayout>
      </Switch>
    </Router>
}

export default App;
