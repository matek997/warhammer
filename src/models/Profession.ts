import INetworkData from "../components/graph/INetworkData";
import { Node, Edge } from "vis-network/dist/types/network/Network"


export default class Profession {

	constructor(
		public label = 'Unnamed profession',
		public id = -1,
		public leadsTo: number[] = [],
		// public source: number[] = [],
	) { }


	static getAsNetwork(list: Profession[]) {
		const data: INetworkData<Profession, Edge> = { edges: [], nodes: [] };

		list.forEach(el => {
			el.leadsTo.forEach(to => { data.edges?.push({ to, from: el.id }); })
			data.nodes?.push(el)
		})
		return data;
	}
}
