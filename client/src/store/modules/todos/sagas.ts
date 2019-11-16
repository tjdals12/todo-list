import { take, call, put, fork } from 'redux-saga/effects';
import * as api from 'lib/api';
import { AxiosResponse } from 'axios';
import { getTodos, getTodo, addTodo } from './action';
import { Todo, TodoParameter } from './types';

function* runRequestTodos() {
    const { data }: AxiosResponse<Todo[]> = yield call(api.getTodos);

    if (data) {
        yield put(getTodos.success(data));
    } else {
        yield put(getTodos.failure());
    }
}

function* handleRequestTodos() {
    while (true) {
        yield take(getTodos.request);
        yield fork(runRequestTodos);
    }
}

function* runRequestTodo(id: string) {
    const { data }: AxiosResponse<Todo> = yield call(api.getTodo, id);

    if (data) {
        yield put(getTodo.success(data));
    } else {
        yield put(getTodos.failure());
    }
}

function* handleRequestTodo() {
    while (true) {
        const action: ReturnType<typeof getTodo.request> = yield take(
            getTodo.request,
        );

        yield fork(runRequestTodo, action.payload);
    }
}

function* runAddTodo(archive: string, param: TodoParameter) {
    const { data }: AxiosResponse<Todo> = yield call(
        api.addTodo,
        archive,
        param,
    );

    if (data) {
        yield put(addTodo.success(data));
        yield fork(runRequestTodos);
    } else {
        yield put(addTodo.failure());
    }
}

function* handleAddTodo() {
    while (true) {
        const action: ReturnType<typeof addTodo.request> = yield take(
            addTodo.request,
        );

        yield fork(runAddTodo, action.payload.archive, action.payload.param);
    }
}

export default function* todosSaga() {
    yield fork(handleRequestTodos);
    yield fork(handleRequestTodo);
    yield fork(handleAddTodo);
}
