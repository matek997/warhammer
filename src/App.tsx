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
import { Signout } from "./components/views/Signout";
function App() {
  const [activeApi, setActiveApi] = useState({ api: getApi() });

  const ctx = {
    api: activeApi,
    refresh: () => {
      const a = { api: activeApi.api };
      setActiveApi(a);
    },
  };
  return (
    <ApiContext.Provider value={ctx}>
      <Router>
        <Switch>
          <MainLayout>
            <Route path="/warhammer" exact>
              <Home />
            </Route>
            <Route path="/warhammer/signout" exact>
              <Signout />
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
