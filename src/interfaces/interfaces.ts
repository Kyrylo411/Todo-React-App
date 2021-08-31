export interface ITodoItem {
	_id: string;
	value: string;
	done: boolean;
}

export type FilterMap = {
	Active: ITodoItem;
	Completed: ITodoItem;
	All: ITodoItem;
};
