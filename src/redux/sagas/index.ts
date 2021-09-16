import { fork } from '@redux-saga/core/effects';
import authWatcher from './authSaga';
import todoListWatcher from './todoListSaga';

function* rootSaga(): Generator {
	yield fork(todoListWatcher);
	yield fork(authWatcher);
}

export default rootSaga;
