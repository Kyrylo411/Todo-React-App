import { ITodoItem } from '../../interfaices/interfaces';
import { RootState } from '../reducers';

export const GetTodoList = (state: RootState): ITodoItem[] => state.todoList;
