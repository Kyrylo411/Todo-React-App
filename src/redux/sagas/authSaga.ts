import { SagaIterator } from 'redux-saga';
import { call, takeEvery, put } from '@redux-saga/core/effects';
import api from '../../http';
import {
	AuthActionType,
	LogInRequest,
	UserData,
} from '../../interfaices/authReduxInterfaces';
import { AuthResponse } from '../../interfaices/authResponse';
import {
	logInFailure,
	logInSuccess,
} from '../actions/actionCreators/authActionCreators';
import { AxiosResponse } from 'axios';

const logIn = async (userData: UserData) =>
	await api.post<AuthResponse>('/auth/login', {
		login: userData.login,
		password: userData.password,
	});

function* logInWorker(action: LogInRequest): SagaIterator {
	try {
		const res: AxiosResponse = yield call(logIn, action.payload);
		console.log(res.data);
		localStorage.setItem('token', res.data.accessToken);
		yield put(logInSuccess(true));
	} catch (e) {
		yield call(logInFailure, e);
	}
}

function* authWatcher(): SagaIterator {
	yield takeEvery(AuthActionType.USER_LOG_IN_REQUEST, logInWorker);
}

export default authWatcher;
