import { Basic, Enums } from "./Skills";


export type TargetEnums = 'Basic' |
	'Performer' |
	'Trade' |
	'SecretLanguage' |
	'ArcaneLanguage' |
	'CommonKnowledge' |
	'Language' |
	'AcademicKnowledge' |
	'SecretSigns' |
	'VariableSkills';


export interface BasicDef {
	type: 'BASIC' | 'VARIABLE' | 'COMPOSITE';
	key: string;
	targetEnum: TargetEnums;
}

export interface CompositeSkillDef extends BasicDef {

	list: Array<BasicDef | CompositeSkillDef>;
	operator: 'OR' | 'AND',
};
export type SkillDef = CompositeSkillDef | BasicDef;