import { combineReducers } from 'redux';

import { setTodoList, todoLoading } from './todoListReducer';
import { authorization, authLoading } from './authReducer';

export const rootReducer = combineReducers({
	setTodoList,
	authorization,
	todoLoading,
	authLoading,
});

export type RootState = ReturnType<typeof rootReducer>;
