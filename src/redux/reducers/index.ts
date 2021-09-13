import { combineReducers } from 'redux';

import todoList from './todoListReducer';
import { authorization } from './authReducer';

export const rootReducer = combineReducers({
	todoList,
	authorization,
});

export type RootState = ReturnType<typeof rootReducer>;
