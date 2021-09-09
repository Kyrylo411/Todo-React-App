import { ITodoItem } from '../../../components/interfaces';
import {
	AddItemAction,
	DeleteItemAction,
	GetItemListAction,
	DeleteCompletedItemsAction,
} from '../../interfaces';
import ActionTypes from '../actionTypes';

export const getItemListAction = (list: ITodoItem[]): GetItemListAction => {
	return {
		type: ActionTypes.GET_ITEM_LIST,
		payload: list,
	};
};

export const addItemAction = (item: ITodoItem): AddItemAction => {
	return {
		type: ActionTypes.ADD_ITEM,
		payload: item,
	};
};

export const deleteItemAction = (list: ITodoItem[]): DeleteItemAction => {
	return {
		type: ActionTypes.DELETE_ITEM,
		payload: list,
	};
};

export const deleteCompletedItemsAction = (
	list: ITodoItem[],
): DeleteCompletedItemsAction => {
	return {
		type: ActionTypes.DELETE_COMPLETED_ITEMS,
		payload: list,
	};
};
