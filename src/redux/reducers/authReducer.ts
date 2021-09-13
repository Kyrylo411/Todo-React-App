import { AuthActionType, IAuthState, AuthAction } from '../interfaces/auth';

const authState: IAuthState = {
	isLogedIn: false,
};
export const authorization = (
	state = authState,
	action: AuthAction,
): IAuthState => {
	switch (action.type) {
		case AuthActionType.USER_LOG_IN:
			return {
				isLogedIn: action.payload,
			};
		case AuthActionType.USER_LOG_OUT:
			return {
				isLogedIn: action.payload,
			};
		default:
			return state;
	}
};
