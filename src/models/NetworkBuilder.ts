import { Node, Edge } from "vis-network/dist/types/network/Network";
import INetworkData from "../components/graph/INetworkData";
import { IProfession } from "./IProfession";
import { DataSet, Network as vNetwork } from "vis-network/standalone";
import { ProfessionProvider } from "../data/Provider";

export class NetworkBuilder {
  constructor(protected prof: IProfession) {}

  private follow(
    direction: "BACK" | "FORWARD",
    maxDepth: number
  ): IProfession[] {
    let list: IProfession[] = [];
    let toFollow = [this.prof];
    const ignoreIds: number[] = [];

    for (let depth = 0; depth < maxDepth || maxDepth == 0; depth++) {
      list = [...list, ...toFollow];
      ignoreIds.push(...toFollow.map((el) => el.id));
      let toFollowChildren: number[] = [];
      toFollow.forEach((el) => {
        (direction === "FORWARD" ? el.advanceTo : el.advanceFrom).forEach(
          (id) => {
            if (ignoreIds.includes(id)) return;
            toFollowChildren.push(id);
          }
        );
      });
      toFollow = toFollowChildren.map((id) =>
        ProfessionProvider.getProfessionById(id)
      );
    }
    return list;
  }
  public getPrevious() {
    return this.prof.advanceFrom.map((el) =>
      ProfessionProvider.getProfessionById(el)
    );
  }
  public getNext() {
    return this.prof.advanceTo.map((el) =>
      ProfessionProvider.getProfessionById(el)
    );
  }
  buildNetwork(direction: "BACK" | "FORWARD" | "BOTH", depth = 0) {
    // return [] as any;
    let list: IProfession[] = [];
    const initiateArr: number[] = [];
    if (direction == "BACK" || direction == "BOTH") {
      list = this.follow("BACK", depth);
    }
    if (direction == "FORWARD" || direction == "BOTH") {
      list = [...list, ...this.follow("FORWARD", depth)];
    }
    return NetworkBuilder.getAsNetwork(list);
  }

  static getAsNetwork(list: IProfession[]) {
    const edges: { to: number; from: number }[] = [];

    list.forEach((el) => {
      el.advanceTo.forEach((to) => {
        edges.push({ to, from: el.id });
      });
    });
    const data: INetworkData<IProfession, Edge> = {
      edges: new DataSet<Edge, "id">(edges),
      nodes: new DataSet<IProfession, "id">(list),
    };
    return data;
  }
}
