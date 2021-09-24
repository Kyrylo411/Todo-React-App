import { put, call, take, fork } from '@redux-saga/core/effects';

import { io, Socket } from 'socket.io-client';
import { ITodoItem } from '../../interfaices/todos';
import {
  addItem,
  changeItemCheck,
  changeItemValue,
  deleteCompleted,
  deleteItem,
  toggleAll,
} from '../actions/actionCreators/todoListActionCreators';
import { eventChannel, SagaIterator } from 'redux-saga';
import {
  CheckData,
  TodoActionType,
  ValueData,
} from '../../interfaices/todoReduxInterfaces';
import jwtDecode from 'jwt-decode';
import { MyJWTPayload } from '../../interfaices/auth';

const connect = () => {
  const socket = io('http://localhost:5000');
  return new Promise((resolve) => {
    socket.on('connect', () => {
      console.log('connected');
      resolve(socket);
    });
  });
};

function subscribe(socket: Socket) {
  return eventChannel((emit) => {
    socket.on('messages.new', (data: ITodoItem) => {
      emit(addItem(data));
    });
    socket.on('deleteItem.new', (data: ITodoItem) => {
      emit(deleteItem(data));
    });
    socket.on('deleteCompleted.new', (data: ITodoItem[]) => {
      emit(deleteCompleted(data));
    });
    socket.on('toggleAll.new', (data: boolean) => {
      emit(toggleAll(data));
    });
    socket.on('changeItemCheck.new', (data: CheckData) => {
      emit(changeItemCheck(data));
    });
    socket.on('changeItemValue.new', (data: ValueData) => {
      emit(changeItemValue(data));
    });

    return () => {
      socket.off('messages.new');
      socket.off('deleteItem.new');
      socket.off('deleteCompleted.new');
      socket.off('toggleAll.new');
      socket.off('changeItemCheck.new');
      socket.off('changeItemValue.new');
    };
  });
}

function* getData(socket: Socket): SagaIterator {
  const channel = yield call(subscribe, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

function* sendItem(socket: Socket): SagaIterator {
  while (true) {
    const { payload } = yield take(TodoActionType.ADD_ITEM_SUCCES);
    yield put(addItem(payload));
    socket.emit('message', payload);
  }
}

function* sendDeletItem(socket: Socket): SagaIterator {
  while (true) {
    const { payload } = yield take(TodoActionType.DELETE_ITEM_SUCCESS);
    socket.emit('deleteItem', payload);
    yield put(deleteItem(payload));
  }
}

function* sendDeleteCompleted(socket: Socket): SagaIterator {
  while (true) {
    const { payload } = yield take(TodoActionType.DELETE_COMPLETED_SUCCESS);
    socket.emit('deleteCompleted', payload);
    yield put(deleteCompleted(payload));
  }
}

function* sendToggleAll(socket: Socket): SagaIterator {
  while (true) {
    const { payload } = yield take(TodoActionType.TOGGLE_ALL_SUCCESS);
    socket.emit('toggleAll', payload);
    yield put(toggleAll(payload));
  }
}

function* sendChangeItemCheck(socket: Socket): SagaIterator {
  while (true) {
    const { payload } = yield take(TodoActionType.CHANGE_ITEM_CHECK_SUCCESS);
    socket.emit('changeItemCheck', payload);
    yield put(changeItemCheck(payload));
  }
}

function* sendChangeItemValue(socket: Socket): SagaIterator {
  while (true) {
    const { payload } = yield take(TodoActionType.CHANGE_ITEM_VALUE_SUCCESS);
    socket.emit('changeItemValue', payload);
    yield put(changeItemValue(payload));
  }
}

function setRoom(socket: Socket) {
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token');
    const id: MyJWTPayload = jwtDecode(token);
    socket.emit('setRoom', id._doc._id);
  }
}

export default function* flow(): SagaIterator {
  const socket: Socket = yield call(connect);

  yield call(setRoom, socket);
  yield fork(getData, socket);
  yield fork(sendItem, socket);
  yield fork(sendDeletItem, socket);
  yield fork(sendDeleteCompleted, socket);
  yield fork(sendToggleAll, socket);
  yield fork(sendChangeItemCheck, socket);
  yield fork(sendChangeItemValue, socket);
}
