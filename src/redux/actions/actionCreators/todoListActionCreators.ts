import { ITodoItem } from '../../../interfaices/todos';
import {
	DeleteItemFailure,
	DeleteItemRequest,
	DeleteItemSuccess,
	ChangeItemCheckAction,
	ChangeItemValueAction,
	GetItemListRequest,
	GetItemListSuccess,
	GetItemListFailure,
	AdditemRequest,
	AdditemSuccess,
	AdditemFAilure,
	DeleteCompletedRequest,
	DeleteCompletedSuccess,
	DeleteCompletedFailure,
	ToggleAllRequest,
	ToggleAllSuccess,
	ToggleAllFailure,
} from '../../../interfaices/todoReduxInterfaces';
import { TodoActionType } from '../../../interfaices/todoReduxInterfaces';

export const getItemLisRequest = (): GetItemListRequest => {
	return {
		type: TodoActionType.ITEM_LIST_REQUEST,
		payload: null,
	};
};
export const getItemListSuccess = (list: ITodoItem[]): GetItemListSuccess => {
	return {
		type: TodoActionType.ITEM_LIST_SUCCESS,
		payload: list,
	};
};
export const getItemListFailure = (message: string): GetItemListFailure => {
	return {
		type: TodoActionType.ITEM_LIST_FAILURE,
		payload: message,
	};
};

export const addItemRequest = (value: string): AdditemRequest => {
	return {
		type: TodoActionType.ADD_ITEM_REQUEST,
		payload: value,
	};
};
export const addItemSuccess = (item: ITodoItem): AdditemSuccess => {
	return {
		type: TodoActionType.ADD_ITEM_SUCCES,
		payload: item,
	};
};
export const addItemFAilure = (message: string): AdditemFAilure => {
	return {
		type: TodoActionType.ADD_ITEM_FAILURE,
		payload: message,
	};
};

export const deleteItemRequest = (id: string): DeleteItemRequest => {
	return {
		type: TodoActionType.DELETE_ITEM_REQUEST,
		payload: id,
	};
};
export const deleteItemSuccess = (list: ITodoItem): DeleteItemSuccess => {
	return {
		type: TodoActionType.DELETE_ITEM_SUCCESS,
		payload: list,
	};
};
export const deleteItemFailure = (message: string): DeleteItemFailure => {
	return {
		type: TodoActionType.DELETE_ITEM_FAILURE,
		payload: message,
	};
};

export const deleteCompletedRequest = (
	config: ITodoItem[],
): DeleteCompletedRequest => {
	return {
		type: TodoActionType.DELETE_COMPLETED_REQUEST,
		payload: config,
	};
};

export const deleteCompletedSuccess = (
	list: ITodoItem[],
): DeleteCompletedSuccess => {
	return {
		type: TodoActionType.DELETE_COMPLETED_SUCCESS,
		payload: list,
	};
};

export const deleteCompletedFailure = (
	message: string,
): DeleteCompletedFailure => {
	return {
		type: TodoActionType.DELETE_COMPLETED_FAILURE,
		payload: message,
	};
};

export const toggleAllItemsRequest = (
	isAllChecked: boolean,
): ToggleAllRequest => {
	return {
		type: TodoActionType.TOGGLE_ALL_REQUEST,
		payload: isAllChecked,
	};
};

export const toggleAllItemsSuccess = (
	isAllChecked: boolean,
): ToggleAllSuccess => {
	return {
		type: TodoActionType.TOGGLE_ALL_SUCCESS,
		payload: isAllChecked,
	};
};

export const toggleAllItemsFailure = (message: string): ToggleAllFailure => {
	return {
		type: TodoActionType.TOGGLE_ALL_FAILURE,
		payload: message,
	};
};

export const changeItemCheckAction = (
	list: ITodoItem[],
): ChangeItemCheckAction => {
	return {
		type: TodoActionType.CHANGE_ITEM_CHECK,
		payload: list,
	};
};

export const changeItemValueAction = (
	list: ITodoItem[],
): ChangeItemValueAction => {
	return {
		type: TodoActionType.CHANGE_ITEM_VALUE,
		payload: list,
	};
};
