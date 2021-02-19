


import { IProfession } from '../models/IProfession';
import { SkillDef } from '../models/SkillDef';
import { CurrentUser } from './User';


export enum QueryTargets {
	TALENTS, SKILLS, TRAPPINGS
}
export type IdData = { id: string, label: string }
export type IdList = IdData[];
export abstract class Api {

	get user() { return this._user };
	protected _user?: CurrentUser;
	constructor(protected readonly config: string) {

	}
	abstract signin(email: string, password: string): Promise<boolean>;

	abstract signout(): Promise<boolean>

	abstract signup(email: string, password: string): Promise<boolean>

	abstract isSignedin(): Promise<boolean>;

	abstract getProfessionList(): Promise<IdList>

	abstract getProfession(id: string | string[]): Promise<IProfession | IProfession[]>

}


