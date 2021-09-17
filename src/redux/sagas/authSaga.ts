import { SagaIterator } from 'redux-saga';
import { call, takeEvery, put } from '@redux-saga/core/effects';
import api from '../../http';
import {
	AuthActionType,
	LogInRequest,
	RegistrationRequest,
} from '../../interfaices/authReduxInterfaces';
import { AuthResponse } from '../../interfaices/authResponse';
import {
	logInFailure,
	logInSuccess,
	logOutFailure,
	logOutSuccess,
	registrationFailure,
	registrationSuccess,
} from '../actions/actionCreators/authActionCreators';
import { AxiosResponse } from 'axios';

function* logInWorker(action: LogInRequest): SagaIterator {
	try {
		const res: AxiosResponse<AuthResponse> = yield call(
			api.post,
			'/auth/login',
			{
				login: action.payload.login,
				password: action.payload.password,
			},
		);
		console.log(res);
		localStorage.setItem('token', res.data.accessToken);
		yield put(logInSuccess(true));
	} catch (e) {
		console.log(e.message);
		yield put(logInFailure(e.message));
	}
}

function* logOutWorker(): SagaIterator {
	try {
		yield call(api.post, '/auth/logout');
		yield put(logOutSuccess(false));
		localStorage.removeItem('token');
	} catch (e) {
		yield put(logOutFailure(e.message));
	}
}

function* registrationWorker(action: RegistrationRequest): SagaIterator {
	try {
		const res: AxiosResponse<AuthResponse> = yield call(
			api.post,
			'/auth/registration',
			{
				login: action.payload.login,
				password: action.payload.password,
			},
		);
		console.log(res);
		yield put(registrationSuccess());
	} catch (e) {
		yield put(registrationFailure(e.message));
	}
}

function* authWatcher(): SagaIterator {
	yield takeEvery(AuthActionType.USER_LOG_IN_REQUEST, logInWorker);
	yield takeEvery(AuthActionType.REGISTRATION_REQUEST, registrationWorker);
	yield takeEvery(AuthActionType.USER_LOG_OUT_REQUEST, logOutWorker);
}

export default authWatcher;
