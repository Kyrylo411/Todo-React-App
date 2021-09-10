import AuthActionTypes from '../actions/authActionTypes';

export interface IAuthState {
	userName: string;
	isLogedIn: boolean;
}

export interface IAuthAction<T> {
	type: AuthActionTypes;
	payload: T;
}

export type RegistrationAction = IAuthAction<string>;
export type LogInAction = IAuthAction<boolean>;
export type LogOutAction = IAuthAction<boolean>;

export type AuthAction = RegistrationAction | LogInAction | LogOutAction;
