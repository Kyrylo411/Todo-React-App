import { combineReducers } from 'redux';

import { setTodoList, loading } from './todoListReducer';
import { authorization } from './authReducer';

export const rootReducer = combineReducers({
	setTodoList,
	authorization,
	loading,
});

export type RootState = ReturnType<typeof rootReducer>;
