import { Api } from './Api';
import { StaticApi } from './StaticApi';
import { DotnetApi } from './DotnetApi';
import React from 'react';
import { CurrentUser } from './User';
export const getApi = (user?: CurrentUser): Api => {
	const api = process.env.URL_API ?? '';
	const config = process.env.URL_API ?? '';
	switch (api) {
		case 'DOTNETCORE':
			return new DotnetApi(config, user);
		case 'STATIC':
		default:
			return new StaticApi(config, user);
	}
}

export const ApiContext = React.createContext({
	api: getApi(CurrentUser.getDefault()),
	updateUser: (usr?: CurrentUser) => { }
});