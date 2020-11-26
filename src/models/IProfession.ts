import { IMainProfile } from "./IMainProfile";
import { ISecondaryProfile } from "./ISecondaryProfile";


export interface IProfession {
	id: string;
	label: string;
	description: string;
	role: string;
	isAdvanced: boolean;
	mainProfile: IMainProfile;
	secondaryProfile: ISecondaryProfile;
	advanceFrom: string[];
	advanceTo: string[];
	skills: string[];
	talents: string[];
	trappings: string[];
	notes: string;
	source: string;
	numberOfSkills: number;
	numberOfTalents: number;
	numberOfAdvances: number;
}