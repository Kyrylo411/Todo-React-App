import { SagaIterator } from 'redux-saga';
import { call, takeEvery, put } from '@redux-saga/core/effects';
import api from '../../http';
import {
	AuthActionType,
	LogInRequest,
	RegistrationRequest,
	UserData,
} from '../../interfaices/authReduxInterfaces';
import { AuthResponse } from '../../interfaices/authResponse';
import {
	logInFailure,
	logInSuccess,
	registrationFailure,
	registrationSuccess,
} from '../actions/actionCreators/authActionCreators';
import { AxiosResponse } from 'axios';

const logIn = async (userData: UserData) =>
	await api.post<AuthResponse>('/auth/login', {
		login: userData.login,
		password: userData.password,
	});

function* logInWorker(action: LogInRequest): SagaIterator {
	try {
		const res: AxiosResponse<AuthResponse> = yield call(logIn, action.payload);
		localStorage.setItem('token', res.data.accessToken);
		yield put(logInSuccess(true));
	} catch (e) {
		yield call(logInFailure, e);
	}
}

const registration = async (userData: UserData) =>
	await api.post<AuthResponse>('/auth/registration', {
		login: userData.login,
		password: userData.password,
	});

function* registrationWorker(action: RegistrationRequest): SagaIterator {
	try {
		yield call(registration, action.payload);
		yield put(registrationSuccess());
	} catch (e) {
		yield call(registrationFailure, e);
	}
}

function* authWatcher(): SagaIterator {
	yield takeEvery(AuthActionType.USER_LOG_IN_REQUEST, logInWorker);
	yield takeEvery(AuthActionType.REGISTRATION_REQUEST, registrationWorker);
}

export default authWatcher;
