import { ITodoItem } from '../../interfaices/todos';
import { RootState } from '../reducers';

export const GetTodoList = (state: RootState): ITodoItem[] => state.setTodoList;
export const TodoListLoading = (state: RootState): boolean => state.loading;
