import { createAsyncAction } from 'typesafe-actions';
import { Todo, TodoParameter } from './types';

export const getTodos = createAsyncAction(
    'todos/GET_TODOS_REQUEST',
    'todos/GET_TODOS_SUCCESS',
    'todos/GET_TODOS_FAILURE',
)<void, Todo[], void>();

export const getTodo = createAsyncAction(
    'todos/GET_TODO_REQUEST',
    'todos/GET_TODO_SUCCESS',
    'todos/GET_TODO_FAILURE',
)<string, Todo, void>();

export const addTodo = createAsyncAction(
    'todos/ADD_TODO_REQUEST',
    'todos/ADD_TODO_SUCCESS',
    'todos/ADD_TODO_FAILURE',
)<TodoParameter, Todo, void>();
