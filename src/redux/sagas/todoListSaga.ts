import { put, call, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { SagaIterator } from 'redux-saga';
import jwtDecode from 'jwt-decode';

import api from '../../http';
import { customJwtPayload } from '../../interfaices/jwtPayload';
import {
	AdditemRequest,
	TodoActionType,
	DeleteItemRequest,
	DeleteCompletedRequest,
	ToggleAllRequest,
	CheckData,
	ChangeItemCheckRequest,
	ChangeItemValueRequest,
	ValueData,
} from '../../interfaices/todoReduxInterfaces';
import { ITodoItem } from '../../interfaices/todos';
import {
	addItemFAilure,
	addItemSuccess,
	changeItemCheckFailure,
	changeItemCheckSuccess,
	changeItemValueFailure,
	changeItemValueSuccess,
	deleteCompletedSuccess,
	deleteItemFailure,
	deleteItemSuccess,
	getItemListFailure,
	getItemListSuccess,
	toggleAllItemsFailure,
	toggleAllItemsSuccess,
} from '../actions/actionCreators/todoListActionCreators';

const fetchTodoList = async (): Promise<AxiosResponse<ITodoItem[]>> =>
	await api.get(`/todolist/todo`);

function* getTodoListWorker(): SagaIterator {
	try {
		const res: AxiosResponse<ITodoItem[]> = yield call(fetchTodoList);
		yield put(getItemListSuccess(res.data));
	} catch (e) {
		yield call(getItemListFailure, e);
	}
}

const postItem = async (value: string): Promise<AxiosResponse<ITodoItem>> =>
	await api.post<ITodoItem>(`/todolist/todo`, {
		value,
		done: false,
	});

function* addItemWorker(action: AdditemRequest): SagaIterator {
	try {
		const decodedToken: customJwtPayload = jwtDecode(
			localStorage.getItem('token'),
		);
		const userId = decodedToken._doc._id;

		const res: AxiosResponse<ITodoItem> = yield call(postItem, action.payload);
		yield put(
			addItemSuccess({
				value: res.data.value,
				_id: res.data._id,
				done: false,
				userId,
			}),
		);
	} catch (e) {
		yield call(addItemFAilure, e);
	}
}

const deleteItem = async (id: string): Promise<AxiosResponse<ITodoItem>> =>
	await api.delete<ITodoItem>(`/todolist/todo/${id}`);

function* deleteItemWorker(action: DeleteItemRequest): SagaIterator {
	try {
		const res: AxiosResponse<ITodoItem> = yield call(
			deleteItem,
			action.payload,
		);
		yield put(deleteItemSuccess(res.data));
	} catch (e) {
		yield call(deleteItemFailure, e);
	}
}

const deleteCompleted = async (
	checkeditems: ITodoItem[],
): Promise<AxiosResponse<ITodoItem[]>> =>
	await api.delete<ITodoItem[]>(`/todolist/todo`, { data: { checkeditems } });

function* deleteCompletedWorker(action: DeleteCompletedRequest): SagaIterator {
	try {
		const res: AxiosResponse<ITodoItem[]> = yield call(
			deleteCompleted,
			action.payload,
		);
		yield put(deleteCompletedSuccess(res.data));
	} catch (e) {
		yield call(deleteItemFailure, e);
	}
}

const toggleAllItems = async (
	isAllChecked: boolean,
): Promise<AxiosResponse<ITodoItem[]>> =>
	await api.put<ITodoItem[]>(`/todolist/todo/${isAllChecked}`);

function* toggleAllWorker(action: ToggleAllRequest): SagaIterator {
	try {
		yield call(toggleAllItems, action.payload);
		yield put(toggleAllItemsSuccess(action.payload));
	} catch (e) {
		yield call(toggleAllItemsFailure, e);
	}
}

const changeItemCheck = async (res: CheckData) =>
	await api.put<ITodoItem>(`/todolist/todo/`, {
		_id: res.id,
		done: res.checked,
	});

function* changeItemCheckworker(action: ChangeItemCheckRequest): SagaIterator {
	try {
		const res: AxiosResponse<ITodoItem> = yield call(
			changeItemCheck,
			action.payload,
		);
		yield put(
			changeItemCheckSuccess({ id: res.data._id, checked: res.data.done }),
		);
	} catch (e) {
		yield call(changeItemCheckFailure, e);
	}
}

const changeItemValue = async (data: ValueData) =>
	await api.put<ITodoItem[]>(`/todolist/todo`, {
		_id: data.id,
		value: data.value,
	});

function* changeIputValueWorker(action: ChangeItemValueRequest): SagaIterator {
	try {
		const res: AxiosResponse<ITodoItem> = yield call(
			changeItemValue,
			action.payload,
		);
		yield put(
			changeItemValueSuccess({ id: res.data._id, value: res.data.value }),
		);
	} catch (e) {
		yield call(changeItemValueFailure, e);
	}
}

function* todoListWatcher(): SagaIterator {
	yield takeLatest(TodoActionType.ITEM_LIST_REQUEST, getTodoListWorker);
	yield takeEvery(TodoActionType.ADD_ITEM_REQUEST, addItemWorker);
	yield takeEvery(TodoActionType.DELETE_ITEM_REQUEST, deleteItemWorker);
	yield takeEvery(
		TodoActionType.DELETE_COMPLETED_REQUEST,
		deleteCompletedWorker,
	);
	yield takeEvery(TodoActionType.TOGGLE_ALL_REQUEST, toggleAllWorker);
	yield takeEvery(
		TodoActionType.CHANGE_ITEM_CHECK_REQUEST,
		changeItemCheckworker,
	);
	yield takeLatest(
		TodoActionType.CHANGE_ITEM_VALUE_REQUEST,
		changeIputValueWorker,
	);
}

export default todoListWatcher;