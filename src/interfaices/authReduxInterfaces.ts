export enum AuthActionType {
	USER_LOG_IN_REQUEST = 'USER_LOG_IN_REQUEST',
	USER_LOG_IN_SUCCESS = 'USER_LOG_IN_SUCCESS',
	USER_LOG_IN_FAILURE = 'USER_LOG_IN_FAILUREs',
	CHECK_IS_LOGGED_IN = 'CHECK_IS_LOGGED_IN',

	USER_LOG_OUT = 'USER_LOG_OUT',
}

export interface IAuthAction<T extends AuthActionType, P> {
	type: T;
	payload: P;
}
export type UserData = {
	login: string;
	password: string;
};

export type LogInRequest = IAuthAction<
	AuthActionType.USER_LOG_IN_REQUEST,
	UserData
>;
export type LogInSuccess = IAuthAction<
	AuthActionType.USER_LOG_IN_SUCCESS,
	boolean
>;
export type LogInFailure = IAuthAction<
	AuthActionType.USER_LOG_IN_FAILURE,
	string
>;

export type CheckIsLoggedIn = IAuthAction<
	AuthActionType.CHECK_IS_LOGGED_IN,
	boolean
>;

export type LogOutAction = IAuthAction<AuthActionType.USER_LOG_OUT, boolean>;

export type AuthAction =
	| LogOutAction
	| LogInRequest
	| LogInSuccess
	| LogInFailure
	| CheckIsLoggedIn;
