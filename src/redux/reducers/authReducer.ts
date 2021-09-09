import { AuthAction, IAuthState } from '../interfaces';

const initialState: IAuthState = {
	isAuth: false,
};

export default function authorization(
	state = initialState,
	action: AuthAction,
) {
	switch (action.type) {
		default:
			return state;
	}
}
