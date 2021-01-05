import { ISearch } from "./ISearch";
import { Api, QueryTargets } from "../Api";

export class TextSearch implements ISearch<string> {
  constructor(
    protected readonly api: Api,
    protected readonly target: QueryTargets.TALENTS | QueryTargets.TRAPPINGS
  ) {}
  async search(string: string): Promise<string[]> {
    return this.api.query(string, this.target) as Promise<string[]>;
  }
  getElement(obj: string): JSX.Element {
    return <span>{obj}</span>;
  }
}
