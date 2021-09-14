import { ITodoItem } from '../../interfaices/todoItem';
import { RootState } from '../reducers';

export const GetTodoList = (state: RootState): ITodoItem[] => state.todoList;
