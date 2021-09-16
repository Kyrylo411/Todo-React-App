import { put, call, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { SagaIterator } from 'redux-saga';
import jwtDecode from 'jwt-decode';

import api from '../../http';
import { customJwtPayload } from '../../interfaices/jwtPayload';
import {
	AdditemRequest,
	TodoActionType,
} from '../../interfaices/todoReduxInterfaces';
import { ITodoItem } from '../../interfaices/todos';
import {
	addItemFAilure,
	addItemSuccess,
	getItemListFailure,
	getItemListSuccess,
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

function* todoListWatcher(): SagaIterator {
	yield takeLatest(TodoActionType.ITEM_LIST_REQUEST, getTodoListWorker);
	yield takeEvery(TodoActionType.ADD_ITEM_REQUEST, addItemWorker);
}

export default todoListWatcher;
