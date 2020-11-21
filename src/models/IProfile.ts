import { IStat } from "./IStat";




export interface IProfile {
	[index:string]:IStat<Number>
}