import { RootState } from '../reducers';

export const IsLogedIn = (state: RootState): boolean => state.authorization;
