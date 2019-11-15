import { createReducer } from 'typesafe-actions';
import { todosActionTypes, todosStateTypes } from './types';

const initialState: todosStateTypes = {
    todos: [],
    todo: {
        _id: '',
        text: '',
        tags: [],
        effEndDt: '',
        effStaDt: '',
    },
};

export default createReducer<todosStateTypes, todosActionTypes>(initialState, {
    /** GET LIST */
    'todos/GET_TODOS_SUCCESS': (state, action) => ({
        ...state,
        todos: action.payload,
    }),
    'todos/GET_TODOS_FAILURE': state => state,

    /** GET ONE */
    'todos/GET_TODO_SUCCESS': (state, action) => ({
        ...state,
        todo: action.payload,
    }),
    'todos/GET_TODO_FAILURE': state => state,

    /** ADD */
    'todos/ADD_TODO_SUCCESS': (state, action) => ({
        ...state,
        todo: action.payload,
    }),
    'todos/ADD_TODO_FAILURE': state => state,
});
