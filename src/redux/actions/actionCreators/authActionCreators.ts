import { LogInAction, LogOutAction } from '../../interfaces/auth';
import { AuthActionType } from '../../interfaces/auth';

export const logInAction = (isLogedIn: boolean): LogInAction => {
	return {
		type: AuthActionType.USER_LOG_IN,
		payload: isLogedIn,
	};
};

export const logOutAction = (isLogedIn: boolean): LogOutAction => {
	return {
		type: AuthActionType.USER_LOG_OUT,
		payload: isLogedIn,
	};
};
