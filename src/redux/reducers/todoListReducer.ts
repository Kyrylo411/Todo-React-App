import { ITodolState, TodoListAction } from '../interfaces';
import actionTypes from '../actions/actionTypes';

const initialState: ITodolState = {
	todoItemList: [],
};

function todoList(state = initialState, action: TodoListAction): ITodolState {
	switch (action.type) {
		case actionTypes.GET_ITEM_LIST:
			return {
				...state,
				todoItemList: action.payload,
			};
		case actionTypes.ADD_ITEM: {
			return {
				...state,
				todoItemList: [...state.todoItemList, action.payload],
			};
		}
		case actionTypes.DELETE_ITEM: {
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
