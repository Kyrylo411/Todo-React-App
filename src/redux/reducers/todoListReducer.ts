import { ITodoItem } from '../../interfaices/todos';
import {
	TodoListAction,
	TodoActionType,
} from '../../interfaices/todoReduxInterfaces';

export function todoList(
	state: ITodoItem[] = [],
	action: TodoListAction,
): ITodoItem[] {
	switch (action.type) {
		case TodoActionType.ITEM_LIST_SUCCESS:
			return (state = action.payload);

		case TodoActionType.ADD_ITEM: {
			return (state = [...state, action.payload]);
		}
		case TodoActionType.DELETE_ITEM: {
			return (state = action.payload);
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

export function errors(state = '', action: TodoListAction): string {
	switch (action.type) {
		case TodoActionType.ITEM_LIST_FAILURE: {
			return (state = action.payload);
		}
		default:
			return state;
	}
}
