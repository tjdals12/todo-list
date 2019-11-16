import { fork } from 'redux-saga/effects';
import archivesSaga from 'store/modules/archives/sagas';
import todosSaga from 'store/modules/todos/sagas';

export default function* rootSaga() {
    yield fork(archivesSaga);
    yield fork(todosSaga);
}
