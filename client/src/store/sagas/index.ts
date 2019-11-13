import { fork } from 'redux-saga/effects';

function* helloSaga(): Generator {
    yield console.log('Hello Saga!');
}

export default function* rootSaga(): Generator {
    yield fork(helloSaga);
}
