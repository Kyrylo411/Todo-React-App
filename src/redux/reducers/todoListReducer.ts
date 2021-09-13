import {
	ITodolState,
	TodoListAction,
	TodoActionType,
} from '../interfaces/todo';

const initialState: ITodolState = {
	todoItemList: [],
};

function todoList(state = initialState, action: TodoListAction): ITodolState {
	switch (action.type) {
		case TodoActionType.GET_ITEM_LIST:
			return {
				...state,
				todoItemList: action.payload,
			};
		case TodoActionType.ADD_ITEM: {
			return {
				...state,
				todoItemList: [...state.todoItemList, action.payload],
			};
		}
		case TodoActionType.DELETE_ITEM: {
			return {
				...state,
				todoItemList: action.payload,
			};
		}
		case TodoActionType.DELETE_COMPLETED_ITEMS: {
			return {
				...state,
				todoItemList: action.payload,
			};
		}
		case TodoActionType.TOGGLE_ALL_ITEMS: {
			return {
				...state,
				todoItemList: action.payload,
			};
		}
		case TodoActionType.CHANGE_ITEM_CHECK: {
			return {
				...state,
				todoItemList: action.payload,
			};
		}
		case TodoActionType.CHANGE_ITEM_VALUE: {
			return {
				...state,
				todoItemList: action.payload,
			};
		}

		default:
			return state;
	}
}

export default todoList;
