import { ITodoItem } from '../../../interfaices/todos';
import {
	DeleteItemAction,
	GetItemListSuccess,
	DeleteCompletedItemsAction,
	ToggleAllItemsAction,
	ChangeItemCheckAction,
	ChangeItemValueAction,
	GetItemListRequest,
	GetItemListFailure,
	AdditemRequest,
	AdditemSuccess,
	AdditemFAilure,
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
//

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
//
export const deleteItemAction = (list: ITodoItem[]): DeleteItemAction => {
	return {
		type: TodoActionType.DELETE_ITEM,
		payload: list,
	};
};

export const deleteCompletedItemsAction = (
	list: ITodoItem[],
): DeleteCompletedItemsAction => {
	return {
		type: TodoActionType.DELETE_COMPLETED_ITEMS,
		payload: list,
	};
};

export const toggleAllItemsAction = (
	list: ITodoItem[],
): ToggleAllItemsAction => {
	return {
		type: TodoActionType.TOGGLE_ALL_ITEMS,
		payload: list,
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
