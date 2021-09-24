import { fork } from '@redux-saga/core/effects';
import authWatcher from './authSaga';
import todoListWatcher from './todoListSaga';
import flow from './soketSaga';

function* rootSaga(): Generator {
  yield fork(todoListWatcher);
  yield fork(authWatcher);
  yield fork(flow);
}

export default rootSaga;
