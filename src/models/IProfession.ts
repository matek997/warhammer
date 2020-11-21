import INetworkData from "../components/graph/INetworkData";
import { Node, Edge } from "vis-network/dist/types/network/Network"
import { IStat } from "./IStat";
import { IMainProfile } from "./IMainProfile";
import { ISecondaryProfile } from "./ISecondaryProfile";



export interface IProfession {
	id: number;
	name: IStat<string>;
	description: IStat<string>;
	role: IStat<string>;
	isAdvanced: IStat<boolean>;
	mainProfile: IMainProfile;
	secondaryProfile: ISecondaryProfile;
	advanceFrom: number[];
	advanceTo: number[];
}
/*
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
*/