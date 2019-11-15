import { ActionType } from 'typesafe-actions';
import { getTodos, getTodo, addTodo } from './action';

const actions = { getTodos, getTodo, addTodo };
export type todosActionTypes = ActionType<typeof actions>;

export type Todo = {
    _id: string;
    text: string;
    tags: Array<string>;
    effStaDt: string;
    effEndDt: string;
};

export type TodoParameter = {
    text: string;
    tags: Array<string>;
    effStaDt?: string;
    effEndDt?: string;
};

export type todosStateTypes = {
    todos: Todo[];
    todo: Todo;
};
