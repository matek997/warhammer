import React from "react";
import "./App.css";
import { MainLayout } from "./components/containers/MainLayout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/views/Home";
import { Map } from "./components/views/Map";
import { Combine } from "./components/views/Combine";
import { Authorization } from "./components/views/Authorization";
import { getApi } from "./api/ApiContext";
import { useState } from "react";
import { Signout } from "./components/views/Signout";
import { IViewProps } from "./components/views/IViewProps";
function App() {
  const [activeApi, setActiveApi] = useState({ api: getApi() });

  const ctx: IViewProps = {
    api: activeApi.api,
    refresh: () => {
      const a = { api: activeApi.api };
      setActiveApi(a);
    },
  };
  return (
    <Router>
      <Switch>
        <MainLayout api={ctx.api} refresh={ctx.refresh}>
          <Route path="/warhammer" exact>
            <Home api={ctx.api} refresh={ctx.refresh} />
          </Route>
          <Route path="/warhammer/signout" exact>
            <Signout api={ctx.api} refresh={ctx.refresh} />
          </Route>
          <Route path="/warhammer/signin" exact>
            <Authorization
              api={ctx.api}
              refresh={ctx.refresh}
              action="SIGNIN"
            />
          </Route>
          <Route path="/warhammer/signup" exact>
            <Authorization
              api={ctx.api}
              action="SIGNUP"
              refresh={ctx.refresh}
            />
          </Route>
          <Route path="/warhammer/map" exact>
            <Map api={ctx.api} refresh={ctx.refresh} />
          </Route>
          <Route path="/warhammer/combine" exact>
            <Combine api={ctx.api} refresh={ctx.refresh} />
          </Route>
          <Route path="/" exact>
            <Home api={ctx.api} refresh={ctx.refresh} />
          </Route>
        </MainLayout>
      </Switch>
    </Router>
  );
}

export default App;
