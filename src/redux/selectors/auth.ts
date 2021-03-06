import { RootState } from '../reducers';

export const IsLogedIn = (state: RootState): boolean => state.authorization;
export const AuthLoading = (state: RootState): boolean => state.authLoading;
export const AuthError = (state: RootState): string => state.setAuthError;
