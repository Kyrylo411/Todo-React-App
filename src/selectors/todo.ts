import { ITodoItem } from '../components/interfaces';
import { RootState } from '../redux/reducers';

export const GetTodoList = (state: RootState): ITodoItem[] =>
	state.todoList.todoItemList;
