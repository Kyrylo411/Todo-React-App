import {
	CheckIsLoggedIn,
	LogInFailure,
	LogInRequest,
	LogInSuccess,
	LogOutFailure,
	LogOutRequest,
	LogOutSuccess,
	AuthData,
	RegistrationFailure,
	RegistrationRequest,
	RegistrationSuccess,
} from '../../../interfaices/authReduxInterfaces';
import { AuthActionType } from '../../../interfaices/authReduxInterfaces';

export const logInRequest = (data: AuthData): LogInRequest => {
	return {
		type: AuthActionType.USER_LOG_IN_REQUEST,
		payload: data,
	};
};
export const logInSuccess = (isLogedIn: boolean): LogInSuccess => {
	return {
		type: AuthActionType.USER_LOG_IN_SUCCESS,
		payload: isLogedIn,
	};
};
export const logInFailure = (message: string): LogInFailure => {
	return {
		type: AuthActionType.USER_LOG_IN_FAILURE,
		payload: message,
	};
};

export const checkIsLoggedIn = (isLogedIn: boolean): CheckIsLoggedIn => {
	return {
		type: AuthActionType.CHECK_IS_LOGGED_IN,
		payload: isLogedIn,
	};
};

export const logOutRequest = (): LogOutRequest => {
	return {
		type: AuthActionType.USER_LOG_OUT_REQUEST,
		payload: null,
	};
};
export const logOutSuccess = (isLogedIn: boolean): LogOutSuccess => {
	return {
		type: AuthActionType.USER_LOG_OUT_SUCCESS,
		payload: isLogedIn,
	};
};
export const logOutFailure = (message: string): LogOutFailure => {
	return {
		type: AuthActionType.USER_LOG_OUT_FAILURE,
		payload: message,
	};
};

export const registrationRequest = (data: AuthData): RegistrationRequest => {
	return {
		type: AuthActionType.REGISTRATION_REQUEST,
		payload: data,
	};
};

export const registrationSuccess = (): RegistrationSuccess => {
	return {
		type: AuthActionType.REGISTRATION_SUCCESS,
		payload: null,
	};
};

export const registrationFailure = (message: string): RegistrationFailure => {
	return {
		type: AuthActionType.REGISTRATION_FAILURE,
		payload: message,
	};
};
