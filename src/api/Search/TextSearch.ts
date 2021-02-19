import { ISearch } from "./ISearch";
import { Api, QueryTargets } from "../Api";
import React from "react";
import { SkillDef } from "../../models/SkillDef";

export class TextSearch implements ISearch<string | SkillDef> {
  constructor(
    protected readonly api: Api,
    protected readonly target: QueryTargets
  ) { }
  async search(string: string): Promise<Array<string | SkillDef>> {

    return [];
  }
}
