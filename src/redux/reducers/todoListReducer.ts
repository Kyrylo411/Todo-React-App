import { ITodolState, TodoListAction } from '../interfaces/todo';
import TodoActionTypes from '../actions/todoActionTypes';

const initialState: ITodolState = {
	todoItemList: [],
};

function todoList(state = initialState, action: TodoListAction): ITodolState {
	switch (action.type) {
		case TodoActionTypes.GET_ITEM_LIST:
			return {
				...state,
				todoItemList: action.payload,
			};
		case TodoActionTypes.ADD_ITEM: {
			return {
				...state,
				todoItemList: [...state.todoItemList, action.payload],
			};
		}
		case TodoActionTypes.DELETE_ITEM: {
			return {
				...state,
				todoItemList: action.payload,
			};
		}
		case TodoActionTypes.DELETE_COMPLETED_ITEMS: {
			return {
				...state,
				todoItemList: action.payload,
			};
		}
		case TodoActionTypes.TOGGLE_ALL_ITEMS: {
			return {
				...state,
				todoItemList: action.payload,
			};
		}
		case TodoActionTypes.CHANGE_ITEM_CHECK: {
			return {
				...state,
				todoItemList: action.payload,
			};
		}
		case TodoActionTypes.CHANGE_ITEM_VALUE: {
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
