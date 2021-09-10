import {
	RegistrationAction,
	LogInAction,
	LogOutAction,
} from '../../interfaces/auth';
import AuthActionTypes from '../authActionTypes';

export const userRegistrationAction = (
	userName: string,
): RegistrationAction => {
	return {
		type: AuthActionTypes.USER_REGISTRATION,
		payload: userName,
	};
};

export const logInAction = (isLogedIn: boolean): LogInAction => {
	return {
		type: AuthActionTypes.USER_LOG_IN,
		payload: isLogedIn,
	};
};

export const logOutAction = (isLogedIn: boolean): LogOutAction => {
	return {
		type: AuthActionTypes.USER_LOG_OUT,
		payload: isLogedIn,
	};
};
