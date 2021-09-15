export enum TodoListActionTypes {
	FETCH_TODO_LIST = 'FETCH_TODO_LIST',
}

export interface ISagaAction<T> {
	type: T;
}

export type FetchTodoListAction =
	ISagaAction<TodoListActionTypes.FETCH_TODO_LIST>;
