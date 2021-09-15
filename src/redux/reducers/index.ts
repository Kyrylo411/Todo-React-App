import { combineReducers } from 'redux';

import { todoList, errors, loading } from './todoListReducer';
import { authorization } from './authReducer';

export const rootReducer = combineReducers({
	todoList,
	authorization,
	errors,
	loading,
});

export type RootState = ReturnType<typeof rootReducer>;
