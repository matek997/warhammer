import { IMainProfile } from "../models/IMainProfile";
import { IProfession } from "../models/IProfession";
import { ISecondaryProfile } from "../models/ISecondaryProfile";
import { IStat } from "../models/IStat";
import { arrCareers } from "./careerdata";
import { LangData } from "./LangData";
import { Professions } from "./Professions";

type Adaptable = {
  id: number;
  Name: string;
  Type: string;
  Role: string;
  WS: string;
  BS: string;
  S: string;
  T: string;
  Ag: string;
  Int: string;
  WP: string;
  Fel: string;
  A: string;
  W: string;
  SB: string;
  TB: string;
  M: string;
  Mag: string;
  IP: string;
  FP: string;
  Description: string;
  Skills: string;
  Talents: string;
  Trappings: string;
  Entries: string;
  EntriesClean: string;
  Exits: string;
  ExitsClean: string;
  Notes: string;
  Source: string;
  NumberOfSkills: string;
  NumberOfTalents: string;
  NumberOfAdvances: string;
};
/** provides profession elements from data file
 * @todo make an api for that someday?
 */
export class ProfessionProvider {
  static getByName(name: string) {
    const enumified = this.enumifyName(name);
    const id = (Professions[enumified as any] as any) as number;
    return this.getProfessionById(id);
  }
  static getProfessionById(id: Professions) {
    return this.castToIProfession(this.getAdaptableObject(id));
  }

  private static enumifyName(name: string) {
    return name.trim().toUpperCase().replace(/[ -]/g, "_");
  }
  static getAll() {
    return Object.keys(Professions)
      .filter((el) => !isNaN(Number(el)))
      .map((el) => this.getProfessionById((el as unknown) as number));
  }
  private static castToIProfession(obj: Adaptable): IProfession {
    const getEnums = (str: string) => {
      if (str == "None") return [];
      return str
        .split(";")
        .map(
          (el) =>
            (Professions[this.enumifyName(el) as any] as unknown) as number
        );
    };
    let advanceFrom = getEnums(obj.EntriesClean);
    let advanceTo = getEnums(obj.ExitsClean);
    if (advanceFrom.includes(undefined as any)) {
      //   console.log(`invalid entry paths for id:${obj.id}, name:${obj.Name}`);
      advanceFrom = advanceFrom.filter(function (element) {
        return element !== undefined;
      });
    }
    if (advanceTo.includes(undefined as any)) {
      //   console.log(`invalid exit paths for id:${obj.id}, name:${obj.Name}`);
      advanceTo = advanceTo.filter(function (element) {
        return element !== undefined;
      });
    }
    return {
      id: obj.id,
      name: this.createIStat<string>(
        LangData.PROFESSION_NAME,
        "",
        this.enumifyName(obj.Name)
      ),
      label: obj.Name,
      description: this.createIStat<string>(
        LangData.PROFESSION_NAME,
        "",
        obj.Name
      ),
      role: this.createIStat<string>(
        LangData.PROFESSION_ROLE,
        LangData.PROFESSION_ROLE_DESCRIPTION,
        obj.Name
      ),
      isAdvanced: this.createIStat<boolean>(
        LangData.PROFESSION_ADVANCED,
        LangData.PROFESSION_ADVANCED_DESCRIPTION,
        obj.Type === "Advanced"
      ),
      mainProfile: this.createMainProfile(obj),
      secondaryProfile: this.createSecondaryProfile(obj),
      advanceFrom,
      advanceTo,
    };
  }
  private static createMainProfile(obj: Adaptable): IMainProfile {
    return {
      WS: this.createIStat<number>(
        LangData.WS,
        LangData.WS_DESCRIPTION,
        (obj.WS as unknown) as number
      ),
      BS: this.createIStat<number>(
        LangData.BS,
        LangData.BS_DESCRIPTION,
        (obj.WS as unknown) as number
      ),
      S: this.createIStat<number>(
        LangData.S,
        LangData.S_DESCRIPTION,
        (obj.WS as unknown) as number
      ),
      T: this.createIStat<number>(
        LangData.T,
        LangData.T_DESCRIPTION,
        (obj.WS as unknown) as number
      ),
      Ag: this.createIStat<number>(
        LangData.AG,
        LangData.AG_DESCRIPTION,
        (obj.WS as unknown) as number
      ),
      Int: this.createIStat<number>(
        LangData.INT,
        LangData.INT_DESCRIPTION,
        (obj.WS as unknown) as number
      ),
      WP: this.createIStat<number>(
        LangData.WP,
        LangData.WP_DESCRIPTION,
        (obj.WS as unknown) as number
      ),
      Fel: this.createIStat<number>(
        LangData.FEL,
        LangData.FEL_DESCRIPTION,
        (obj.WS as unknown) as number
      ),
    };
  }
  private static createSecondaryProfile(obj: Adaptable): ISecondaryProfile {
    return {
      A: this.createIStat<number>(
        LangData.A,
        LangData.A_DESCRIPTION,
        (obj.A as unknown) as number
      ),
      W: this.createIStat<number>(
        LangData.W,
        LangData.W_DESCRIPTION,
        (obj.W as unknown) as number
      ),
      SB: this.createIStat<number>(
        LangData.SB,
        LangData.SB_DESCRIPTION,
        (obj.SB as unknown) as number
      ),
      TB: this.createIStat<number>(
        LangData.TB,
        LangData.TB_DESCRIPTION,
        (obj.TB as unknown) as number
      ),
      M: this.createIStat<number>(
        LangData.M,
        LangData.M_DESCRIPTION,
        (obj.M as unknown) as number
      ),
      Mag: this.createIStat<number>(
        LangData.MAG,
        LangData.MAG_DESCRIPTION,
        (obj.Mag as unknown) as number
      ),
      IP: this.createIStat<number>(
        LangData.IP,
        LangData.IP_DESCRIPTION,
        (obj.IP as unknown) as number
      ),
      FP: this.createIStat<number>(
        LangData.FP,
        LangData.FP_DESCRIPTION,
        (obj.FP as unknown) as number
      ),
    };
  }
  private static createIStat<T>(
    name: string,
    description: string,
    value: T
  ): IStat<T> {
    return {
      name,
      description,
      value,
    };
  }
  /** parses original array to more convenient object
   * @todo create json file with mappings
   */

  private static getAdaptableObject(id: Professions): Adaptable {
    const cArray = arrCareers[id] as any;
    for (var i = 2; i <= 18; i++) {
      if (cArray[i] == 0) {
        cArray[i] = "-";
      } else if (i <= 9 && cArray[i] > 0 && cArray[i] < 100) {
        cArray[i] = "+" + cArray[i] + "%";
      } else if (i > 9 && cArray[i] > 0 && cArray[i] < 100) {
        cArray[i] = "+" + cArray[i];
        cArray[i] = cArray[i].replace("++", "+"); // avoids double ++
      }
    }
    //	console.log(Professions[id], id)
    return {
      id,
      Name: cArray[0],
      Type: cArray[1],
      Role: cArray[2],
      WS: cArray[3],
      BS: cArray[4],
      S: cArray[5],
      T: cArray[6],
      Ag: cArray[7],
      Int: cArray[8],
      WP: cArray[9],
      Fel: cArray[10],
      A: cArray[11],
      W: cArray[12],
      SB: cArray[13],
      TB: cArray[14],
      M: cArray[15],
      Mag: cArray[16],
      IP: cArray[17],
      FP: cArray[18],
      Description: cArray[19],
      Skills: cArray[20].replace(/,/g, ", "),
      Talents: cArray[21].replace(/,/g, ", "),
      Trappings: cArray[22].replace(/,/g, ", "),
      Entries: cArray[23].replace(/,/g, ", "),
      EntriesClean: cArray[23].replace(/\(.*\)/g, "").replace(/,/g, ", "),
      Exits: cArray[24].replace(/,/g, ", "),
      ExitsClean: cArray[24].replace(/\(.*\)/g, "").replace(/,/g, ", "),
      Notes: cArray[25],
      Source: cArray[26],
      NumberOfSkills: cArray[27],
      NumberOfTalents: cArray[28],
      NumberOfAdvances: cArray[29],
    };
  }
}
