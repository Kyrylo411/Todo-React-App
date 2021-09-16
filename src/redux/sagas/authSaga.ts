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
		localStorage.setItem('token', res.data.accessToken);
		yield put(logInSuccess(true));
	} catch (e) {
		yield put(logInFailure(e));
	}
}

function* registrationWorker(action: RegistrationRequest): SagaIterator {
	try {
		yield call(api.post, '/auth/registration', {
			login: action.payload.login,
			password: action.payload.password,
		});
		yield put(registrationSuccess());
	} catch (e) {
		yield put(registrationFailure(e));
	}
}

function* authWatcher(): SagaIterator {
	yield takeEvery(AuthActionType.USER_LOG_IN_REQUEST, logInWorker);
	yield takeEvery(AuthActionType.REGISTRATION_REQUEST, registrationWorker);
}

export default authWatcher;
