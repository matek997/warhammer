


import { CurrentUser, User } from './User';

export abstract class Api {

	get user() { return this._user };
	protected _user?: CurrentUser;
	constructor(protected readonly config: string) {

	}
	abstract signin(email: string, password: string): Promise<boolean>;

	abstract signout(): Promise<boolean>

	abstract signup(email: string, password: string): Promise<boolean>

	abstract isSignedin(): Promise<boolean>;
}


