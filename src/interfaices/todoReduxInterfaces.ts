import { ITodoItem } from './todoItem';

export enum TodoActionType {
	GET_ITEM_LIST = 'GET_ITEM_LIST',
	ADD_ITEM = 'ADD_ITEM',
	DELETE_ITEM = 'DELETE_ITEM',
	DELETE_COMPLETED_ITEMS = 'DELETE_COMPLETED_ITEMS',
	TOGGLE_ALL_ITEMS = 'TOGGLE_ALL_ITEMS',
	CHANGE_ITEM_CHECK = 'CHANGE_ITEM_CHECK',
	CHANGE_ITEM_VALUE = 'CHANGE_ITEM_VALUE',
}

export interface IAction<T extends TodoActionType, P> {
	type: T;
	payload: P;
}

export type GetItemListAction = IAction<
	TodoActionType.GET_ITEM_LIST,
	ITodoItem[]
>;
export type AddItemAction = IAction<TodoActionType.ADD_ITEM, ITodoItem>;
export type DeleteItemAction = IAction<TodoActionType.DELETE_ITEM, ITodoItem[]>;
export type DeleteCompletedItemsAction = IAction<
	TodoActionType.DELETE_COMPLETED_ITEMS,
	ITodoItem[]
>;
export type ToggleAllItemsAction = IAction<
	TodoActionType.TOGGLE_ALL_ITEMS,
	ITodoItem[]
>;
export type ChangeItemCheckAction = IAction<
	TodoActionType.CHANGE_ITEM_CHECK,
	ITodoItem[]
>;
export type ChangeItemValueAction = IAction<
	TodoActionType.CHANGE_ITEM_VALUE,
	ITodoItem[]
>;

export type TodoListAction =
	| GetItemListAction
	| AddItemAction
	| DeleteItemAction
	| DeleteCompletedItemsAction
	| ToggleAllItemsAction
	| ChangeItemValueAction
	| ChangeItemCheckAction;
