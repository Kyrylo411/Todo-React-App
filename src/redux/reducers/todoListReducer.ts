import { ITodoItem } from '../../interfaices/todos';
import {
	TodoListAction,
	TodoActionType,
} from '../../interfaices/todoReduxInterfaces';

export function setTodoList(
	state: ITodoItem[] = [],
	action: TodoListAction,
): ITodoItem[] {
	switch (action.type) {
		case TodoActionType.ITEM_LIST_SUCCESS:
			return (state = action.payload);

		case TodoActionType.ADD_ITEM_SUCCES: {
			return (state = [...state, action.payload]);
		}
		case TodoActionType.DELETE_ITEM_SUCCESS: {
			return (state = state.filter(
				(item: ITodoItem) => item._id !== action.payload._id,
			));
		}
		case TodoActionType.DELETE_COMPLETED_ITEMS: {
			return (state = action.payload);
		}
		case TodoActionType.TOGGLE_ALL_ITEMS: {
			return (state = action.payload);
		}
		case TodoActionType.CHANGE_ITEM_CHECK: {
			return (state = action.payload);
		}
		case TodoActionType.CHANGE_ITEM_VALUE: {
			return (state = action.payload);
		}
		default:
			return state;
	}
}

export function loading(state = false, action: TodoListAction): boolean {
	switch (action.type) {
		case TodoActionType.ITEM_LIST_REQUEST: {
			return (state = true);
		}
		case TodoActionType.ITEM_LIST_SUCCESS: {
			return (state = false);
		}
		case TodoActionType.ITEM_LIST_FAILURE: {
			return (state = false);
		}
		default:
			return state;
	}
}
