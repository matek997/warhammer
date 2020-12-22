


import { CurrentUser, User } from './User';

export abstract class Api {

	get user() { return this._user };

	constructor(protected readonly config: string, protected _user?: CurrentUser) {
		console.log(this._user);
		this._user = new CurrentUser('user@example.net', 'token', { language: 'en' });
	}
	abstract signin(email: string, password: string): Promise<boolean>;

	abstract signout(): Promise<boolean>

	abstract signup(email: string, password: string): Promise<boolean | User>

	abstract isSignedin(): Promise<boolean>;
}


