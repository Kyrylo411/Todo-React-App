import { ITodoItem } from '../components/interfaces';
import { RootState } from '../redux/reducers';

export const GetTodoList = (state: RootState): ITodoItem[] =>
	state.todoList.todoItemList;

// export const GetUser = (state: RootState): string =>
// 	state.authorization.userName;

// export const IsLogedIn = (state: RootState): boolean =>
// 	state.authorization.isLogedIn;
