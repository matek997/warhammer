


import { Api } from './Api';
import { CurrentUser } from './User';
export class StaticApi extends Api {
	private signedinstate = false;

	async signin(email: string, password: string): Promise<boolean> {
		await this.addFakeLag();
		this.signedinstate = true;
		this._user = new CurrentUser(email + '@example.net', 'token');
		this._user.setName(email);

		return true;//return new CurrentUser('user@example.net', 'token');
	}
	async signout(): Promise<boolean> {
		await this.addFakeLag();
		this.signedinstate = false
		return true;
	}
	async signup(email: string, password: string): Promise<boolean | CurrentUser> {
		await this.addFakeLag();
		this._user = new CurrentUser(email + '@example.net', 'token');
		this.signedinstate = true;
		return this._user;
	}


	private addFakeLag(): Promise<void> {
		return new Promise(resolve => setTimeout(resolve, 1000));
	}

	async isSignedin() {
		await this.addFakeLag();
		return this.signedinstate;
	}
}