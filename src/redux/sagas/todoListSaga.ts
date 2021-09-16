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
	ChangeItemCheckRequest,
	ChangeItemValueRequest,
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

function* getTodoListWorker(): SagaIterator {
	try {
		const res: AxiosResponse<ITodoItem[]> = yield call(
			api.get,
			'/todolist/todo',
		);
		yield put(getItemListSuccess(res.data));
	} catch (e) {
		yield put(getItemListFailure(e));
	}
}

function* addItemWorker(action: AdditemRequest): SagaIterator {
	try {
		const decodedToken: customJwtPayload = jwtDecode(
			localStorage.getItem('token'),
		);
		const userId = decodedToken._doc._id;

		const res: AxiosResponse<ITodoItem> = yield call(
			api.post,
			'/todolist/todo',
			{
				value: action.payload,
				done: false,
			},
		);
		yield put(
			addItemSuccess({
				value: res.data.value,
				_id: res.data._id,
				done: false,
				userId,
			}),
		);
	} catch (e) {
		yield put(addItemFAilure(e));
	}
}

function* deleteItemWorker(action: DeleteItemRequest): SagaIterator {
	try {
		const res: AxiosResponse<ITodoItem> = yield call(
			api.delete,
			`/todolist/todo/${action.payload}`,
		);
		yield put(deleteItemSuccess(res.data));
	} catch (e) {
		yield put(deleteItemFailure(e));
	}
}

function* deleteCompletedWorker(action: DeleteCompletedRequest): SagaIterator {
	try {
		const res: AxiosResponse<ITodoItem[]> = yield call(
			api.delete,
			`/todolist/todo`,
			{ data: action.payload },
		);
		yield put(deleteCompletedSuccess(res.data));
	} catch (e) {
		yield put(deleteItemFailure(e));
	}
}

function* toggleAllWorker(action: ToggleAllRequest): SagaIterator {
	try {
		yield call(api.put, `/todolist/todo/${action.payload}`);
		yield put(toggleAllItemsSuccess(action.payload));
	} catch (e) {
		yield put(toggleAllItemsFailure(e));
	}
}

function* changeItemCheckworker(action: ChangeItemCheckRequest): SagaIterator {
	try {
		const res: AxiosResponse<ITodoItem> = yield call(
			api.put,
			'/todolist/todo/',
			{
				_id: action.payload.id,
				done: action.payload.checked,
			},
		);
		yield put(
			changeItemCheckSuccess({ id: res.data._id, checked: res.data.done }),
		);
	} catch (e) {
		yield put(changeItemCheckFailure(e));
	}
}

function* changeIputValueWorker(action: ChangeItemValueRequest): SagaIterator {
	try {
		const res: AxiosResponse<ITodoItem> = yield call(
			api.put,
			'/todolist/todo',
			{
				_id: action.payload.id,
				value: action.payload.value,
			},
		);
		yield put(
			changeItemValueSuccess({ id: res.data._id, value: res.data.value }),
		);
	} catch (e) {
		yield put(changeItemValueFailure(e));
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
