import { ITodoItem } from '../../components/interfaces';
import TodoActionTypes from '../actions/todoActionTypes';

export interface ITodolState {
	todoItemList: ITodoItem[];
}

export interface IAction<T> {
	type: TodoActionTypes;
	payload: T;
}

export type GetItemListAction = IAction<ITodoItem[]>;
export type AddItemAction = IAction<ITodoItem>;
export type DeleteItemAction = IAction<ITodoItem[]>;
export type DeleteCompletedItemsAction = IAction<ITodoItem[]>;
export type ToggleAllItemsAction = IAction<ITodoItem[]>;
export type ChangeItemCheckAction = IAction<ITodoItem[]>;
export type ChangeItemValueAction = IAction<ITodoItem[]>;

export type TodoListAction = GetItemListAction &
	AddItemAction &
	DeleteItemAction &
	DeleteCompletedItemsAction &
	ToggleAllItemsAction &
	ChangeItemValueAction;
