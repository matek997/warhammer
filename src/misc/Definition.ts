import { Enums, VariableSkills } from "../models/Skills";
import { CompositeSkillDef, BasicDef, TargetEnums, SkillDef } from '../models/SkillDef'
export class Definition implements CompositeSkillDef,
	BasicDef {
	private constructor(public type: 'BASIC' | 'VARIABLE' | 'COMPOSITE',
		public key: string,
		public targetEnum: TargetEnums,
		public list: (CompositeSkillDef | BasicDef)[],
		public operator: 'OR' | 'AND'
	) { }



	toString() {
		return Definition.getLabel(this)
	}

	static from(def: CompositeSkillDef | BasicDef) {
		return new Definition(def.type, def.key, def.targetEnum,
			(def as CompositeSkillDef).list, (def as CompositeSkillDef).operator)
	}
	static getLabel(skill: SkillDef) {
		if (skill.type === "COMPOSITE")
			return (skill as CompositeSkillDef).operator === "OR" ? "One of..." : "All of";
		const target: any = (Enums as any)[skill.targetEnum] ?? {};

		let text = target[skill.key] ?? skill.key;
		if (skill.type === "VARIABLE") {
			text = `${(VariableSkills as any)[skill.targetEnum]}: ${text}`;
		}
		return text;
	};
}

