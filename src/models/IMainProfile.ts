import { IProfile } from "./IProfile";
import { IStat } from "./IStat";


export interface IMainProfile extends IProfile {
	WS: IStat<number>;
	BS: IStat<number>;
	S: IStat<number>;
	T: IStat<number>;
	Ag: IStat<number>;
	Int: IStat<number>;
	WP: IStat<number>;
	Fel: IStat<number>;
}

