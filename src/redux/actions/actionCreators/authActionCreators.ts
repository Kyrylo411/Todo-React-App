import {
	CheckIsLoggedIn,
	LogInFailure,
	LogInRequest,
	LogInSuccess,
	LogOutAction,
	RegistrationFailure,
	RegistrationRequest,
	RegistrationSuccess,
	UserData,
} from '../../../interfaices/authReduxInterfaces';
import { AuthActionType } from '../../../interfaices/authReduxInterfaces';

export const logInRequest = (data: UserData): LogInRequest => {
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

export const logOutAction = (isLogedIn: boolean): LogOutAction => {
	return {
		type: AuthActionType.USER_LOG_OUT,
		payload: isLogedIn,
	};
};

export const registrationRequest = (data: UserData): RegistrationRequest => {
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
