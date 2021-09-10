import { ITodoItem } from '../../../components/interfaces';
import {
	AddItemAction,
	DeleteItemAction,
	GetItemListAction,
	DeleteCompletedItemsAction,
	ToggleAllItemsAction,
	ChangeItemCheckAction,
	ChangeItemValueAction,
} from '../../interfaces/todo';
import TodoActionTypes from '../todoActionTypes';

export const getItemListAction = (list: ITodoItem[]): GetItemListAction => {
	return {
		type: TodoActionTypes.GET_ITEM_LIST,
		payload: list,
	};
};

export const addItemAction = (item: ITodoItem): AddItemAction => {
	return {
		type: TodoActionTypes.ADD_ITEM,
		payload: item,
	};
};

export const deleteItemAction = (list: ITodoItem[]): DeleteItemAction => {
	return {
		type: TodoActionTypes.DELETE_ITEM,
		payload: list,
	};
};

export const deleteCompletedItemsAction = (
	list: ITodoItem[],
): DeleteCompletedItemsAction => {
	return {
		type: TodoActionTypes.DELETE_COMPLETED_ITEMS,
		payload: list,
	};
};

export const toggleAllItemsAction = (
	list: ITodoItem[],
): ToggleAllItemsAction => {
	return {
		type: TodoActionTypes.TOGGLE_ALL_ITEMS,
		payload: list,
	};
};

export const changeItemCheckAction = (
	list: ITodoItem[],
): ChangeItemCheckAction => {
	return {
		type: TodoActionTypes.CHANGE_ITEM_CHECK,
		payload: list,
	};
};

export const changeItemValueAction = (
	list: ITodoItem[],
): ChangeItemValueAction => {
	return {
		type: TodoActionTypes.CHANGE_ITEM_VALUE,
		payload: list,
	};
};
