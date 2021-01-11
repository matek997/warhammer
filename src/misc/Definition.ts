import { Enums, VariableSkills } from "../models/Skills";
import { TargetEnums, SkillDef } from '../models/SkillDef'
export class Definition implements SkillDef {
	private constructor(public type: 'BASIC' | 'VARIABLE' | 'COMPOSITE',
		public key?: string,
		public targetEnum?: TargetEnums,
		public list?: SkillDef[],
		public operator?: 'OR' | 'AND'
	) { }



	toString() {
		return Definition.getLabel(this)
	}

	static from(def: SkillDef) {
		return new Definition(def.type, def.key, def.targetEnum,
			def.list, (def as SkillDef).operator)
	}
	static getLabel(skill: SkillDef) {
		if (skill.type === "COMPOSITE") {
			const operatorStr = (skill as SkillDef).operator === "OR" ? "One of " : "All of ";
			const childrenStr: string = (skill.list ?? [])
				.map(el => `(${Definition.getLabel(el)})`)
				.join(', ');
			return `${operatorStr} ${childrenStr} `;

		}
		const target: any = (Enums as any)[skill.targetEnum as TargetEnums] ?? {};

		let text = target[skill.key ?? ''] ?? skill.key;
		if (skill.type === "VARIABLE") {
			text = `${(VariableSkills as any)[skill.targetEnum as TargetEnums]}: ${text} `;
		}
		return text;
	};
}

