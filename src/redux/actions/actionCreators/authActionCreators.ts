import {
	CheckIsLoggedIn,
	LogInFailure,
	LogInRequest,
	LogInSuccess,
	LogOutAction,
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
