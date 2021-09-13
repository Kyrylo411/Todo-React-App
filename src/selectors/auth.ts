import { RootState } from '../redux/reducers';

export const IsLogedIn = (state: RootState): boolean =>
	state.authorization.isLogedIn;
