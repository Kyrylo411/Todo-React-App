import { ITodoItem } from '../../components/interfaces';
import ActionTypes from '../actions/actionTypes';

export interface ITodolState {
	todoItemList: ITodoItem[];
	loading?: boolean;
	error?: null | string;
}

export interface IAction<T> {
	type: ActionTypes;
	payload: T;
}

export type GetItemListAction = IAction<ITodoItem[]>;
export type AddItemAction = IAction<ITodoItem>;
export type DeleteItemAction = IAction<ITodoItem[]>;
export type DeleteCompletedItemsAction = IAction<ITodoItem[]>;
export type ToggleAllItemsAction = IAction<ITodoItem[]>;

export type TodoListAction = GetItemListAction &
	AddItemAction &
	DeleteItemAction &
	DeleteCompletedItemsAction &
	ToggleAllItemsAction;
