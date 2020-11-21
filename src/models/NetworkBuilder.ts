import { Node, Edge } from "vis-network/dist/types/network/Network"
import INetworkData from "../components/graph/INetworkData";
import { IProfession } from "./IProfession";
import { DataSet } from 'vis-network';
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




	static getAsNetwork(list: IProfession[], forward = true) {


		const data: INetworkData<ProfessionNode, Edge> = { edges: [], nodes: [] };

		list.forEach(el => {
			const node = new ProfessionNode(el);
			(forward ? el.advanceTo : el.advanceFrom).forEach(next => { data.edges?.push({ to: next, from: el.id }); })
			data.nodes?.push(node)
		})
		return data;
	}
}