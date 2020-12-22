


import { Api } from './Api';
import { CurrentUser } from './User';
export class DotnetApi extends Api {
	async signin(email: string, password: string): Promise<boolean> {
		// return new CurrentUser('user@example.net', 'token');
		return true;
	}
	async signout(): Promise<boolean> {
		return true;
	}
	async signup(email: string, password: string): Promise<boolean | CurrentUser> {
		return new CurrentUser('user@example.net', 'token');
	}

	async isSignedin() {
		return true;
	}


}