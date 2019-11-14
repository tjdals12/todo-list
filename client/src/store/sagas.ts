import { fork } from 'redux-saga/effects';
import archivesSaga from 'store/modules/archive/sagas';

export default function* rootSaga() {
    yield fork(archivesSaga);
}
