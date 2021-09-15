import { fork } from '@redux-saga/core/effects';
import todoListWatcher from './todoListSaga';

function* rootSaga(): Generator {
	yield fork(todoListWatcher);
}

export default rootSaga;
