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

    case TodoActionType.ADD_ITEM: {
      return [...state, action.payload];
    }
    case TodoActionType.DELETE_ITEM: {
      return state.filter((item: ITodoItem) => item._id !== action.payload._id);
    }
    case TodoActionType.DELETE_COMPLETED: {
      return state.filter((item: ITodoItem) => item.done === false);
    }
    case TodoActionType.TOGGLE_ALL: {
      return state.map((item: ITodoItem) =>
        action.payload ? { ...item, done: false } : { ...item, done: true },
      );
    }
    case TodoActionType.CHANGE_ITEM_CHECK: {
      return state.map((item: ITodoItem) =>
        item._id === action.payload.id
          ? { ...item, done: action.payload.checked }
          : item,
      );
    }
    case TodoActionType.CHANGE_ITEM_VALUE: {
      return state.map((item: ITodoItem) => {
        return item._id === action.payload.id
          ? { ...item, value: action.payload.value }
          : item;
      });
    }
    default:
      return state;
  }
}

export function todoLoading(state = false, action: TodoListAction): boolean {
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
