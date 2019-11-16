import { ActionType } from 'typesafe-actions';
import { getTodos, getTodo, addTodo, onChange } from './action';

const actions = { getTodos, getTodo, addTodo, onChange };
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
    tags: string;
    effStaDt?: string;
    effEndDt?: string;
};

export type todosStateTypes = {
    todos: Todo[];
    todo: Todo;
};
