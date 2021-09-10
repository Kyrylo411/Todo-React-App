import AuthActionTypes from '../actions/authActionTypes';
import { AuthAction, IAuthState } from '../interfaces/auth';

const initialState: IAuthState = {
	userName: '',
	isLogedIn: false,
};

export default function authorization(
	state = initialState,
	action: AuthAction,
): IAuthState {
	switch (action.type) {
		case AuthActionTypes.USER_REGISTRATION:
			return {
				...state,
				userName: action.payload as string,
			};

		case AuthActionTypes.USER_LOG_IN:
			return {
				...state,
				isLogedIn: action.payload as boolean,
			};
		case AuthActionTypes.USER_LOG_OUT:
			return {
				...state,
				isLogedIn: action.payload as boolean,
			};

		default:
			return state;
	}
}
