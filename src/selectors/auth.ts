import { RootState } from '../redux/reducers';

export const GetUser = (state: RootState): string =>
	state.authorization.userName;

export const IsLogedIn = (state: RootState): boolean =>
	state.authorization.isLogedIn;
