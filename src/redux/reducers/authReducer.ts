import {
	AuthActionType,
	AuthAction,
} from '../../interfaices/authReduxInterfaces';

export const authorization = (state = false, action: AuthAction): boolean => {
	switch (action.type) {
		case AuthActionType.CHECK_IS_LOGGED_IN:
			return (state = action.payload);
		case AuthActionType.USER_LOG_IN_SUCCESS:
			return (state = action.payload);
		case AuthActionType.USER_LOG_OUT_SUCCESS:
			return (state = action.payload);
		default:
			return state;
	}
};

export function authLoading(state = false, action: AuthAction): boolean {
	switch (action.type) {
		case AuthActionType.REGISTRATION_REQUEST: {
			return (state = true);
		}
		case AuthActionType.REGISTRATION_SUCCESS: {
			return (state = false);
		}
		case AuthActionType.REGISTRATION_FAILURE: {
			return (state = false);
		}
		case AuthActionType.USER_LOG_IN_REQUEST: {
			return (state = true);
		}
		case AuthActionType.USER_LOG_IN_SUCCESS: {
			return (state = false);
		}
		case AuthActionType.USER_LOG_IN_FAILURE: {
			return (state = false);
		}
		default:
			return state;
	}
}
