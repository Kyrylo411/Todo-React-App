import { put, call, takeEvery } from '@redux-saga/core/effects';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { SagaIterator } from 'redux-saga';

import api from '../../http';
import { ITodoItem } from '../../interfaices/todos';
import {
	getItemListFailure,
	getItemListSuccess,
} from '../actions/actionCreators/todoListActionCreators';

const fetchTodoList = async (): Promise<AxiosResponse<ITodoItem[]>> =>
	await api.get(`/todolist/todo`);

function* getTodoListWorker(): SagaIterator {
	try {
		const res: AxiosRequestConfig = yield call(fetchTodoList);
		yield put(getItemListSuccess(res.data));
	} catch (e) {
		getItemListFailure(e);
	}
}

function* todoListWatcher(): SagaIterator {
	yield takeEvery('ITEM_LIST_REQUEST', getTodoListWorker);
}

export default todoListWatcher;
