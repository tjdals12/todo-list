import { take, call, put, fork } from 'redux-saga/effects';
import * as api from 'lib/api';
import { AxiosResponse } from 'axios';
import {
    getArchives,
    getArchive,
    createArchive,
    deleteArchive,
} from './action';
import { Archive, deleteResult } from './types';

function* runRequestArchives() {
    const { data }: AxiosResponse<Archive[]> = yield call(api.getArchives);

    if (data) {
        yield put(getArchives.success(data));
    } else {
        yield put(getArchives.failure());
    }
}

function* handleRequestArchives() {
    while (true) {
        yield take(getArchives.request);
        yield fork(runRequestArchives);
    }
}

// ! take, fork를 takeEvery를 통해 간결화 할 수 있음.
// function* handleRequestArchives() {
//     yield takeEvery(getArchives.request, runRequestArchives);
// }

function* runRequestArchive(id: string) {
    const { data }: AxiosResponse<Archive> = yield call(api.getArchive, id);

    if (data) {
        yield put(getArchive.success(data));
    } else {
        yield put(getArchive.failure());
    }
}

function* handleRequestArchive() {
    while (true) {
        const action: ReturnType<typeof getArchive.request> = yield take(
            getArchive.request,
        );

        yield fork(runRequestArchive, action.payload);
    }
}

function* runCreateArchive(title: string) {
    const { data }: AxiosResponse<Archive> = yield call(
        api.createArchive,
        title,
    );

    if (data) {
        yield put(createArchive.success(data));
        yield fork(runRequestArchives);
    } else {
        yield put(createArchive.failure());
    }
}

function* handleCreateArchive() {
    while (true) {
        const action: ReturnType<typeof createArchive.request> = yield take(
            createArchive.request,
        );
        yield fork(runCreateArchive, action.payload);
    }
}

function* runDeleteArchive(id: string) {
    const { data }: AxiosResponse<deleteResult> = yield call(
        api.deleteArchive,
        id,
    );

    if (data) {
        yield put(deleteArchive.success(data));
        yield fork(runRequestArchives);
    } else {
        yield put(deleteArchive.failure());
    }
}

function* handleDeleteArchive() {
    while (true) {
        const action: ReturnType<typeof deleteArchive.request> = yield take(
            deleteArchive.request,
        );
        yield fork(runDeleteArchive, action.payload);
    }
}

export default function* archivesSaga() {
    yield fork(handleRequestArchives);
    yield fork(handleRequestArchive);
    yield fork(handleCreateArchive);
    yield fork(handleDeleteArchive);
}
