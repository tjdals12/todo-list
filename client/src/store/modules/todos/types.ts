import { ActionType } from 'typesafe-actions';
import { getTodos, getTodo, addTodo, setTarget } from './action';

const actions = { getTodos, getTodo, addTodo, setTarget };
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
    target: string;
};
