



export interface ISearch<SearchObj> {



	search(string: string): Promise<SearchObj[]>;
}