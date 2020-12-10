import React from "react";
import "./App.css";
import { MainLayout } from "./components/containers/MainLayout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/views/Home";
import { Map } from "./components/views/Map";
import { Combine } from "./components/views/Combine";
function App() {
  return (
    <Router>
      <Switch>
        <MainLayout>
          <Route path="/warhammer" exact>
            <Home />
          </Route>
          <Route path="/warhammer/map" exact>
            <Map />
          </Route>
          <Route path="/warhammer/combine" exact>
            <Combine />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </MainLayout>
      </Switch>
    </Router>
  );
}

export default App;
