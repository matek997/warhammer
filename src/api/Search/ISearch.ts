

export interface ISearch<SearchObj> {
	search(string: string): Promise<SearchObj[]>;

	getElement(obj: SearchObj): JSX.Element
}