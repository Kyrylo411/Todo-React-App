export interface ITodoItem {
	_id?: string;
	value: string;
	done: boolean;
	userId?: string;
}

export type Filter = 'Active' | 'Completed' | 'All';

export type FilterMap = Record<Filter, ITodoItem>;
