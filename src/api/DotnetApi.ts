


import { ProfessionBuilder } from '../misc/ProfessionBuilder';
import { Api } from './Api';



export class DotnetApi extends Api {
	async signin(email: string, password: string): Promise<boolean> {
		// return new CurrentUser('user@example.net', 'token');
		return true;
	}
	async signout(): Promise<boolean> {

		// const args = new EndpointArgs(this._user?.token ?? '');

		// this.fetch(this.getEndpointUrl('signout'),{
		// 	method:'GET',

		// })
		return true;
	}

	async signup(email: string, password: string): Promise<boolean> {
		return true; //return new CurrentUser('user@example.net', 'token');
	}

	async isSignedin() {
		return true;
	}

	async getProfession(id: string | string[]) {
		return (new ProfessionBuilder()).getEmpty();
	}

	async getProfessionList() {
		return [];
	}

	private getEndpointUrl(endpoint: string) {
		return `${this.config}/User/${endpoint}`;
	}
}