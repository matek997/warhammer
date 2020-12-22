import React from "react";
import "./App.css";
import { MainLayout } from "./components/containers/MainLayout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/views/Home";
import { Map } from "./components/views/Map";
import { Combine } from "./components/views/Combine";
import { Authorization } from "./components/views/Authorization";
import { ApiContext, getApi } from "./api/ApiContext";
import { useState } from "react";
import { CurrentUser } from "./api/User";
function App() {
  const [user, setUser] = useState(
    CurrentUser.getDefault() as CurrentUser | undefined
  );
  const [activeApi] = useState(getApi(user));
  return (
    <ApiContext.Provider value={{ api: activeApi, updateUser: setUser }}>
      <Router>
        <Switch>
          <MainLayout>
            <Route path="/warhammer" exact>
              <Home />
            </Route>
            <Route path="/warhammer/signin" exact>
              <Authorization />
            </Route>
            <Route path="/warhammer/signup" exact>
              <Authorization />
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
    </ApiContext.Provider>
  );
}

export default App;
