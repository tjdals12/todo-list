import { createAction, createAsyncAction } from 'typesafe-actions';
import { Archive, deleteResult } from './types';

export const getArchives = createAsyncAction(
    'archives/GET_ARCHIVES_REQUEST',
    'archives/GET_ARCHIVES_SUCCESS',
    'archives/GET_ARCHIVES_FAILURE',
)<number, { archives: Archive[]; lastPage: number }, void>();

export const getArchive = createAsyncAction(
    'archives/GET_ARCHIVE_REQUEST',
    'archives/GET_ARCHIVE_SUCCESS',
    'archives/GET_ARCHIVE_FAILURE',
)<string, Archive, void>();

export const createArchive = createAsyncAction(
    'archives/CREATE_ACHIVE_REQUEST',
    'archives/CREATE_ACHIVE_SUCCESS',
    'archives/CREATE_ACHIVE_FAILURE',
)<string, Archive, void>();

export const editArchive = createAsyncAction(
    'archives/EDIT_ACHIVE_REQUEST',
    'archives/EDIT_ACHIVE_SUCCESS',
    'archives/EDIT_ACHIVE_FAILURE',
)<{ archiveId: string; title: string }, Archive, void>();

export const deleteArchive = createAsyncAction(
    'archives/DELETE_ACHIVE_REQUEST',
    'archives/DELETE_ACHIVE_SUCCESS',
    'archives/DELETE_ACHIVE_FAILURE',
)<string, deleteResult, void>();

export const deleteTodo = createAsyncAction(
    'archives/DELETE_TODO_REQUEST',
    'archives/DELETE_TODO_SUCCESS',
    'archives/DELETE_TODO_FAILURE',
)<{ archiveId: string; todoId: string }, Archive, void>();

export const setTarget = createAction(
    'archives/SET_TARGET',
    (payload: { name: string; value: string }) => payload,
)();
