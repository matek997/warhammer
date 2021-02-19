import { Api } from "./Api";
import { StaticApi } from "./StaticApi";
import { DotnetApi } from "./DotnetApi";
import React from "react";
import { CurrentUser } from "./User";
export const getApi = (): Api => {
  const api = process.env.URL_API ?? "";
  const config = process.env.URL_API ?? "";
  return new DotnetApi(config);
  switch (api) {
    case "DOTNETCORE":
      return new DotnetApi(config);
    case "STATIC":
    default:
      return new StaticApi(config);
  }
};

export const ApiContext = React.createContext({
  api: { api: getApi() },
  refresh: () => { },
});
