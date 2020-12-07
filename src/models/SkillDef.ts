import { Basic, Enums } from "./Skills";


type Enums = 'Basic' |
	'Performer' |
	'Trade' |
	'SecretLanguage' |
	'ArcaneLanguage' |
	'CommonKnowledge' |
	'Language' |
	'AcademicKnowledge' |
	'SecretSigns' |
	'VariableSkills';


type DefBase = {
	key: string;
	targetEnum: Enums;
}
export type BasicDef = { type: 'BASIC' } & DefBase;
export type VariableDef = { type: 'VARIABLE' } & DefBase;
export type NonCompositeSkillDef = BasicDef | VariableDef;

export type CompositeSkillDef = {
	type: 'COMPOSITE',
	list: Array<SkillDef>;
	operator: 'OR' | 'AND',
};
export type SkillDef = CompositeSkillDef | NonCompositeSkillDef;