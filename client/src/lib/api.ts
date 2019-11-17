import axios, { AxiosPromise, AxiosResponse, AxiosInstance } from 'axios';
import { Archive, deleteResult } from 'store/modules/archives';
import { Todo, TodoParameter } from 'store/modules/todos';

const api: AxiosInstance = axios.create({
    baseURL: '/api',
    timeout: 5000,
});

/** Archives */
export const getArchives = (
    page: number,
): AxiosPromise<AxiosResponse<Archive[]>> => api.get(`/archives?page=${page}`);

export const getArchive = (
    id: string,
): AxiosPromise<AxiosResponse<Archive[]>> => api.get(`/archives/${id}`);

export const createArchive = (
    title: string,
): AxiosPromise<AxiosResponse<Archive>> => api.post('/archives', { title });

export const deleteArchive = (
    id: string,
): AxiosPromise<AxiosResponse<deleteResult>> => api.delete(`/archives/${id}`);

/** Todos */
export const getTodos = (): AxiosPromise<AxiosResponse<Todo[]>> =>
    api.get('/todos');

export const getTodo = (id: string): AxiosPromise<AxiosResponse<Todo>> =>
    axios.get(`/todos/${id}`);

export const addTodo = (
    archive: string,
    param: TodoParameter,
): AxiosPromise<AxiosResponse<Todo>> =>
    api.post(`/todos/${archive}`, { ...param, tags: param.tags.split(',') });
