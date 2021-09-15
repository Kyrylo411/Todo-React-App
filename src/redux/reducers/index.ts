import { combineReducers } from 'redux';

import { todoList, loading } from './todoListReducer';
import { authorization } from './authReducer';

export const rootReducer = combineReducers({
	todoList,
	authorization,
	loading,
});

export type RootState = ReturnType<typeof rootReducer>;
