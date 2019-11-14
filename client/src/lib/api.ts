import axios, { AxiosPromise, AxiosResponse, AxiosInstance } from 'axios';
import { Archive, deleteResult } from 'store/modules/archive';

const api: AxiosInstance = axios.create({
    baseURL: '/api',
    timeout: 5000,
});

export const getArchives = (): AxiosPromise<AxiosResponse<Archive[]>> =>
    api.get('/archives');

export const getArchive = (
    id: string,
): AxiosPromise<AxiosResponse<Archive[]>> => api.get(`/archives/${id}`);

export const createArchive = (
    title: string,
): AxiosPromise<AxiosResponse<Archive>> => api.post('/archives', { title });

export const deleteArchive = (
    id: string,
): AxiosPromise<AxiosResponse<deleteResult>> => api.delete(`/archives/${id}`);
