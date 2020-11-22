import { Node, Edge } from "vis-network/dist/types/network/Network"
import INetworkData from "../components/graph/INetworkData";
import { IProfession } from "./IProfession";
import { DataSet, Network as vNetwork } from "vis-network/standalone";

class ProfessionNode implements Node {

	label: string;
	id: number;

	// get label() { return this.profession.name.name; }
	// label = 'a';
	constructor(public profession: IProfession) {

		this.label = this.profession.name.name;
		this.id = this.profession.id;
	}
}
export class NetworkBuilder {





	static getAsNetwork(list: IProfession[]) {

		const edges: { to: number, from: number }[] = [];

		list.forEach(el => {
			el.advanceTo.forEach(to => { edges.push({ to, from: el.id }); })
		})
		const data: INetworkData<IProfession, Edge> = {
			edges: new DataSet<Edge, 'id'>(edges),
			nodes: new DataSet<IProfession, 'id'>(list)
		};
		return data;
	}
}