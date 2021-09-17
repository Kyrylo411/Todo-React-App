import { combineReducers } from 'redux';

import { setTodoList, todoLoading } from './todoListReducer';
import { authorization, authLoading, setAuthError } from './authReducer';

export const rootReducer = combineReducers({
	setTodoList,
	authorization,
	todoLoading,
	authLoading,
	setAuthError,
});

export type RootState = ReturnType<typeof rootReducer>;
