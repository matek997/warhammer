import { IProfile } from "./IProfile";
import { IStat } from "./IStat";


export interface ISecondaryProfile extends IProfile {
	A: IStat<number>;
	W: IStat<number>;
	SB: IStat<number>;
	TB: IStat<number>;
	M: IStat<number>;
	Mag: IStat<number>;
	IP: IStat<number>;
	FP: IStat<number>;
}

