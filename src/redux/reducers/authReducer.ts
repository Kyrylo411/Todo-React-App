import {
	AuthActionType,
	AuthAction,
} from '../../interfaices/authReduxInterfaces';

export const authorization = (state = false, action: AuthAction): boolean => {
	switch (action.type) {
		case AuthActionType.USER_LOG_IN:
			return (state = action.payload);
		case AuthActionType.USER_LOG_OUT:
			return (state = action.payload);
		default:
			return state;
	}
};
