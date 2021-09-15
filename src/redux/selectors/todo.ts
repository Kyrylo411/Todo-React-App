import { ITodoItem } from '../../interfaices/todos';
import { RootState } from '../reducers';

export const GetTodoList = (state: RootState): ITodoItem[] => state.todoList;
export const TodoListError = (state: RootState): string => state.errors;
export const TodoListLoading = (state: RootState): boolean => state.loading;
