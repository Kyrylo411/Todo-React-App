import { ITodoItem } from '../../interfaices/todoItem';
import {
	TodoListAction,
	TodoActionType,
} from '../../interfaices/todoReduxInterfaces';

function todoList(
	state: ITodoItem[] = [],
	action: TodoListAction,
): ITodoItem[] {
	switch (action.type) {
		case TodoActionType.GET_ITEM_LIST:
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

export default todoList;
