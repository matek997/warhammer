import { IMainProfile } from "../models/IMainProfile";
import { IProfession } from "../models/IProfession";
import { IProfile } from "../models/IProfile";
import { ISecondaryProfile } from "../models/ISecondaryProfile";
import { SkillDef } from "../models/SkillDef";
export class ProfessionBuilder {
  srcList!: IProfession[];
  protected _profession!: IProfession;
  get profession() {
    return this._profession;
  }
  constructor() {
    this.reset();
    // if (list) this.setList(list);
  }

  public addProfession(prof: IProfession) {
    this.srcList.push(prof);
    return this;
  }
  public reset() {
    this.srcList = [];
    this.clear();
  }
  public clear() {
    this._profession = this.getEmpty();
  }
  public build(clear = false) {
    if (clear) this.clear();
    this.srcList.forEach((el) => {
      this._profession.mainProfile = this.getMergedIProfiles(
        this._profession.mainProfile,
        el.mainProfile
      );
      this._profession.secondaryProfile = this.getMergedIProfiles(
        this._profession.secondaryProfile,
        el.secondaryProfile
      );
      this._profession.advanceFrom = this._profession.advanceFrom.concat(
        el.advanceFrom
      );
      this._profession.advanceTo = this._profession.advanceTo.concat(
        el.advanceTo
      );
      this._profession.skills = this._profession.skills.concat(el.skills);
      this._profession.talents = this._profession.talents.concat(el.talents);
      this._profession.trappings = this._profession.trappings.concat(
        el.trappings
      );
      this._profession.numberOfSkills =
        this._profession.numberOfSkills + el.numberOfSkills;
      this._profession.numberOfTalents =
        this._profession.numberOfTalents + el.numberOfTalents;
      this._profession.numberOfAdvances =
        this._profession.numberOfAdvances + el.numberOfAdvances;
    });
  }
  private getMergedIProfiles<T extends IProfile>(i1: T, i2: T) {
    const empty = this.getEmptyIProfile([]);
    const keys = Object.keys(i1);
    keys.forEach((el) => (empty[el] = i1[el] + i2[el]));
    return empty as T;
  }
  private getEmptyIProfile(keys: string[]) {
    const obj: IProfile = {};
    keys.forEach((k) => (obj[k] = 0));
    return obj;
  }
  getEmptyMainProfile() {
    return this.getEmptyIProfile([
      "WS",
      "BS",
      "S",
      "T",
      "Ag",
      "Int",
      "WP",
      "Fel",
    ]) as IMainProfile;
  }
  getEmptySecondaryProfile() {
    return this.getEmptyIProfile([
      "A",
      "W",
      "SB",
      "TB",
      "M",
      "Mag",
      "IP",
      "FP",
    ]) as ISecondaryProfile;
  }
  getEmpty(): IProfession {
    return {
      id: "",
      label: "",
      description: "",
      role: "",
      isAdvanced: false,
      mainProfile: this.getEmptyMainProfile(),
      secondaryProfile: this.getEmptySecondaryProfile(),
      advanceFrom: [],
      advanceTo: [],
      skills: [],
      talents: [],
      trappings: [],
      notes: "",
      source: "",
      numberOfSkills: 0,
      numberOfTalents: 0,
      numberOfAdvances: 0,
    };
  }
}
