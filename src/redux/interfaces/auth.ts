export enum AuthActionType {
	USER_LOG_IN = 'USER_LOG_IN',
	USER_LOG_OUT = 'USER_LOG_OUT',
	SET_USER_ID = 'SET_USER_ID',
	REMOVE_USER_ID = 'REMOVE_USER_ID',
}

export interface IAuthState {
	isLogedIn: boolean;
}

export interface IUSerId {
	userId: string;
}

export interface IAuthAction<T extends AuthActionType, P> {
	type: T;
	payload: P;
}

export type LogInAction = IAuthAction<AuthActionType.USER_LOG_IN, boolean>;
export type LogOutAction = IAuthAction<AuthActionType.USER_LOG_OUT, boolean>;

export type AuthAction = LogInAction | LogOutAction;
