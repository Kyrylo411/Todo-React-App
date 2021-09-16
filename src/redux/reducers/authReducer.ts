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
		case AuthActionType.USER_LOG_OUT:
			return (state = action.payload);
		default:
			return state;
	}
};
