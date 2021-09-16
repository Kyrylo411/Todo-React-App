import { ITodoItem } from './todos';

export enum TodoActionType {
	ITEM_LIST_REQUEST = 'ITEM_LIST_REQUEST',
	ITEM_LIST_SUCCESS = 'ITEM_LIST_SUCCESS',
	ITEM_LIST_FAILURE = 'ITEM_LIST_FAILURE',

	ADD_ITEM = 'ADD_ITEM',
	ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST',
	ADD_ITEM_SUCCES = 'ADD_ITEM_SUCCES',
	ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE',

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

export type GetItemListRequest = IAction<
	TodoActionType.ITEM_LIST_REQUEST,
	null
>;

export type GetItemListSuccess = IAction<
	TodoActionType.ITEM_LIST_SUCCESS,
	ITodoItem[]
>;

export type GetItemListFailure = IAction<
	TodoActionType.ITEM_LIST_FAILURE,
	string
>;

export type AdditemRequest = IAction<TodoActionType.ADD_ITEM_REQUEST, string>;
export type AdditemSuccess = IAction<TodoActionType.ADD_ITEM_SUCCES, ITodoItem>;
export type AdditemFAilure = IAction<TodoActionType.ADD_ITEM_FAILURE, string>;

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
	| AdditemRequest
	| AdditemSuccess
	| AdditemFAilure
	| DeleteItemAction
	| DeleteCompletedItemsAction
	| ToggleAllItemsAction
	| ChangeItemValueAction
	| ChangeItemCheckAction
	| GetItemListSuccess
	| GetItemListRequest
	| GetItemListFailure;
