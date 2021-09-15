import todoListWatcher from './todoListSaga';

function* rootSaga(): Generator {
	yield todoListWatcher();
}

export default rootSaga;
