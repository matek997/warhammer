


import { ProfessionProvider } from '../data/Provider';
import { IProfession } from '../models/IProfession';
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
	async signup(email: string, password: string): Promise<boolean> {
		await this.addFakeLag();
		this._user = new CurrentUser(email + '@example.net', 'token');
		this.signedinstate = true;
		return true;//return this._user;
	}


	private addFakeLag(): Promise<void> {
		return new Promise(resolve => setTimeout(resolve, 1000));
	}

	async isSignedin() {
		await this.addFakeLag();
		return this.signedinstate;
	}

	async getProfessionList(): Promise<{ id: string, label: string }[]> {
		await this.addFakeLag();

		const obj = ProfessionProvider.getAll();

		return Object.keys(obj)
			.map(el => { return { id: obj[el].id, label: obj[el].label } });
	}

	async getProfession(id: string | string[]): Promise<IProfession | IProfession[]> {

		await this.addFakeLag();
		if (typeof id === 'string') {
			const prof = ProfessionProvider.getProfessionById(id);
			if (typeof prof === 'undefined') throw new Error();
			return prof;
		} else {
			return id.map(item => {
				const prof = ProfessionProvider.getProfessionById(item);
				if (typeof prof === 'undefined') throw new Error();
				return prof;
			})
		}
	}

}