import { ITodoItem } from '../../../interfaices/todos';
import {
	DeleteItemFailure,
	DeleteItemRequest,
	DeleteItemSuccess,
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
	ChangeItemCheckRequest,
	CheckData,
	ChangeItemCheckFailure,
	ChangeItemCheckSuccess,
	ChangeItemValueRequest,
	ValueData,
	ChangeItemValueSuccess,
	ChangeItemValueFailure,
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
export const addItemFailure = (message: string): AdditemFAilure => {
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

export const changeItemCheckRequest = (
	data: CheckData,
): ChangeItemCheckRequest => {
	return {
		type: TodoActionType.CHANGE_ITEM_CHECK_REQUEST,
		payload: data,
	};
};
export const changeItemCheckSuccess = (
	data: CheckData,
): ChangeItemCheckSuccess => {
	return {
		type: TodoActionType.CHANGE_ITEM_CHECK_SUCCESS,
		payload: data,
	};
};
export const changeItemCheckFailure = (
	message: string,
): ChangeItemCheckFailure => {
	return {
		type: TodoActionType.CHANGE_ITEM_CHECK_FAILURE,
		payload: message,
	};
};

export const changeItemValueRequest = (
	data: ValueData,
): ChangeItemValueRequest => {
	return {
		type: TodoActionType.CHANGE_ITEM_VALUE_REQUEST,
		payload: data,
	};
};

export const changeItemValueSuccess = (
	data: ValueData,
): ChangeItemValueSuccess => {
	return {
		type: TodoActionType.CHANGE_ITEM_VALUE_SUCCESS,
		payload: data,
	};
};

export const changeItemValueFailure = (
	message: string,
): ChangeItemValueFailure => {
	return {
		type: TodoActionType.CHANGE_ITEM_VALUE_FAILURE,
		payload: message,
	};
};
