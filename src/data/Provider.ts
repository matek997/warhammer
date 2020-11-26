import { IProfession } from "../models/IProfession";
import { ProfDefs } from "./data";
import { Professions } from "./Professions";

/** provides profession elements from data file
 * @todo make an api for that someday?
 */
export class ProfessionProvider {

  static getProfessionById(id: string | Professions): IProfession | undefined {

    return ProfDefs[id as Professions];

  }
  static getAll() {
    return ProfDefs as { [index in Professions]: IProfession;} ;
  }
}
