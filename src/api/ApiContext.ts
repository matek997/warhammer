import { Api } from './Api';
import { StaticApi } from './StaticApi';
import { DotnetApi } from './DotnetApi';
import React from 'react';
export const getApi = (): Api => {
  const api = process.env.URL_API ?? 'DOTNETCORE';
  const config = process.env.URL_API ?? 'http://localhost:8000';
  switch (api) {
    case 'STATIC':
      return new StaticApi(config);
    case 'DOTNETCORE':
    default:
      return new DotnetApi(config);
  }
}

export const ApiContext = React.createContext({
  api: { api: getApi() },
  refresh: () => { }
});