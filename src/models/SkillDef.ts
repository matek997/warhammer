

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


export interface SkillDef {
	type: 'BASIC' | 'VARIABLE' | 'COMPOSITE';
	key?: string;
	targetEnum?: TargetEnums;
	list?: Array<SkillDef>;
	operator?: 'OR' | 'AND',
}
