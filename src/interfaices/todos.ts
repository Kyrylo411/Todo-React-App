export interface ITodoItem {
	_id?: string;
	value: string;
	done: boolean;
	userId: string;
}

export type FilterTypes = 'Active' | 'Completed' | 'All';

export enum Filter {
	Active = 'Active',
	Completed = 'Completed',
	All = 'All',
}

export type FilterMap = Record<FilterTypes, ITodoItem>;
