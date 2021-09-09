import { combineReducers } from 'redux';

import todoList from './todoListReducer';

export const rootReducer = combineReducers({
	todoList,
});

export type RootState = ReturnType<typeof rootReducer>;
