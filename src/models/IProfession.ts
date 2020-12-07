import { IMainProfile } from "./IMainProfile";
import { ISecondaryProfile } from "./ISecondaryProfile";
import { SkillDef } from "./SkillDef";


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
	skills: SkillDef[];
	talents: string[];
	trappings: string[];
	notes: string;
	source: string;
	numberOfSkills: number;
	numberOfTalents: number;
	numberOfAdvances: number;
}