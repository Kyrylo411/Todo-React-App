import { ITodoItem } from './todos';

export enum TodoActionType {
	ITEM_LIST_REQUEST = 'ITEM_LIST_REQUEST',
	ITEM_LIST_SUCCESS = 'ITEM_LIST_SUCCESS',
	ITEM_LIST_FAILURE = 'ITEM_LIST_FAILURE',

	ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST',
	ADD_ITEM_SUCCES = 'ADD_ITEM_SUCCES',
	ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE',

	DELETE_ITEM_REQUEST = 'DELETE_ITEM_REQUEST',
	DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS',
	DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE',

	DELETE_COMPLETED_REQUEST = 'DELETE_COMPLETED_REQUEST',
	DELETE_COMPLETED_SUCCESS = 'DELETE_COMPLETED_SUCCESS',
	DELETE_COMPLETED_FAILURE = 'DELETE_COMPLETED_FAILURE',

	TOGGLE_ALL_REQUEST = 'TOGGLE_ALL_REQUEST',
	TOGGLE_ALL_SUCCESS = 'TOGGLE_ALL_SUCCESS',
	TOGGLE_ALL_FAILURE = 'TOGGLE_ALL_FAILURE',

	CHANGE_ITEM_CHECK_REQUEST = 'CHANGE_ITEM_CHECK_REQUEST',
	CHANGE_ITEM_CHECK_SUCCESS = 'CHANGE_ITEM_CHECK_SUCCESS',
	CHANGE_ITEM_CHECK_FAILURE = 'CHANGE_ITEM_CHECK_FAILURE',

	CHANGE_ITEM_VALUE = 'CHANGE_ITEM_VALUE',
	CHANGE_ITEM_VALUE_REQUEST = 'CHANGE_ITEM_VALUE_REQUEST',
	CHANGE_ITEM_VALUE_SUCCESS = 'CHANGE_ITEM_VALUE_SUCCESS',
	CHANGE_ITEM_VALUE_FAILURE = 'CHANGE_ITEM_VALUE_FAILURE',
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

export type DeleteItemRequest = IAction<
	TodoActionType.DELETE_ITEM_REQUEST,
	string
>;

export type DeleteItemSuccess = IAction<
	TodoActionType.DELETE_ITEM_SUCCESS,
	ITodoItem
>;

export type DeleteItemFailure = IAction<
	TodoActionType.DELETE_ITEM_FAILURE,
	string
>;

export type DeleteCompletedRequest = IAction<
	TodoActionType.DELETE_COMPLETED_REQUEST,
	ITodoItem[]
>;
export type DeleteCompletedSuccess = IAction<
	TodoActionType.DELETE_COMPLETED_SUCCESS,
	ITodoItem[]
>;
export type DeleteCompletedFailure = IAction<
	TodoActionType.DELETE_COMPLETED_FAILURE,
	string
>;

export type ToggleAllRequest = IAction<
	TodoActionType.TOGGLE_ALL_REQUEST,
	boolean
>;
export type ToggleAllSuccess = IAction<
	TodoActionType.TOGGLE_ALL_SUCCESS,
	boolean
>;
export type ToggleAllFailure = IAction<
	TodoActionType.TOGGLE_ALL_FAILURE,
	string
>;

export type CheckData = {
	id: string;
	checked: boolean;
};

export type ChangeItemCheckRequest = IAction<
	TodoActionType.CHANGE_ITEM_CHECK_REQUEST,
	CheckData
>;

export type ChangeItemCheckSuccess = IAction<
	TodoActionType.CHANGE_ITEM_CHECK_SUCCESS,
	CheckData
>;
export type ChangeItemCheckFailure = IAction<
	TodoActionType.CHANGE_ITEM_CHECK_FAILURE,
	string
>;

export type ValueData = {
	id: string;
	value: string;
};

export type ChangeItemValueAction = IAction<
	TodoActionType.CHANGE_ITEM_VALUE,
	ITodoItem[]
>;

export type ChangeItemValueRequest = IAction<
	TodoActionType.CHANGE_ITEM_VALUE_REQUEST,
	ValueData
>;

export type ChangeItemValueSuccess = IAction<
	TodoActionType.CHANGE_ITEM_VALUE_SUCCESS,
	ValueData
>;

export type ChangeItemValueFailure = IAction<
	TodoActionType.CHANGE_ITEM_VALUE_FAILURE,
	string
>;

export type TodoListAction =
	| AdditemRequest
	| AdditemSuccess
	| AdditemFAilure
	| ChangeItemValueAction
	| ChangeItemValueRequest
	| ChangeItemValueSuccess
	| ChangeItemValueFailure
	| ChangeItemCheckFailure
	| ChangeItemCheckRequest
	| ChangeItemCheckSuccess
	| GetItemListSuccess
	| GetItemListRequest
	| GetItemListFailure
	| DeleteItemRequest
	| DeleteItemSuccess
	| DeleteItemFailure
	| DeleteCompletedFailure
	| DeleteCompletedRequest
	| DeleteCompletedSuccess
	| ToggleAllFailure
	| ToggleAllSuccess
	| ToggleAllRequest;
