import { put, call, takeEvery } from '@redux-saga/core/effects';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import api from '../../http';
import { ITodoItem } from '../../interfaices/todos';
import { getItemListAction } from '../actions/actionCreators/todoListActionCreators';
import { TodoListActionTypes } from '../../interfaices/todoSagaInterfaces';
import { SagaIterator } from 'redux-saga';
const { FETCH_TODO_LIST } = TodoListActionTypes;

const fetchTodoList = async (): Promise<AxiosResponse<ITodoItem[]>> =>
	await api.get(`/todolist/todo`);

function* getTodoListWorker(): SagaIterator {
	try {
		const res: AxiosRequestConfig = yield call(fetchTodoList);
		yield put(getItemListAction(res.data));
	} catch (e) {
		console.log(e);
	}
}

function* todoListWatcher(): SagaIterator {
	yield takeEvery(FETCH_TODO_LIST, getTodoListWorker);
}

export default todoListWatcher;
