export enum AuthActionType {
	USER_LOG_IN_REQUEST = 'USER_LOG_IN_REQUEST',
	USER_LOG_IN_SUCCESS = 'USER_LOG_IN_SUCCESS',
	USER_LOG_IN_FAILURE = 'USER_LOG_IN_FAILURE',

	CHECK_IS_LOGGED_IN = 'CHECK_IS_LOGGED_IN',

	REGISTRATION_REQUEST = 'REGISTRATION_REQUEST',
	REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS',
	REGISTRATION_FAILURE = 'REGISTRATION_FAILURE',

	USER_LOG_OUT_REQUEST = 'USER_LOG_OUT_REQUEST',
	USER_LOG_OUT_SUCCESS = 'USER_LOG_OUT_SUCCESS',
	USER_LOG_OUT_FAILURE = 'USER_LOG_OUT_FAILURE',
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

export type RegistrationRequest = IAuthAction<
	AuthActionType.REGISTRATION_REQUEST,
	UserData
>;
export type RegistrationSuccess = IAuthAction<
	AuthActionType.REGISTRATION_SUCCESS,
	null
>;
export type RegistrationFailure = IAuthAction<
	AuthActionType.REGISTRATION_FAILURE,
	string
>;

export type LogOutRequest = IAuthAction<
	AuthActionType.USER_LOG_OUT_REQUEST,
	null
>;
export type LogOutSuccess = IAuthAction<
	AuthActionType.USER_LOG_OUT_SUCCESS,
	boolean
>;
export type LogOutFailure = IAuthAction<
	AuthActionType.USER_LOG_OUT_FAILURE,
	string
>;

export type AuthAction =
	| LogInRequest
	| LogInSuccess
	| LogInFailure
	| CheckIsLoggedIn
	| RegistrationRequest
	| RegistrationSuccess
	| RegistrationFailure
	| LogOutRequest
	| LogOutSuccess
	| LogOutFailure;
