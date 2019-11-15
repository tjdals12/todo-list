import { createAsyncAction } from 'typesafe-actions';
import { Archive, deleteResult } from './types';

export const getArchives = createAsyncAction(
    'archives/GET_ARCHIVES_REQUEST',
    'archives/GET_ARCHIVES_SUCCESS',
    'archives/GET_ARCHIVES_FAULURE',
)<void, Archive[], void>();

export const getArchive = createAsyncAction(
    'archives/GET_ARCHIVE_REQUEST',
    'archives/GET_ARCHIVE_SUCCESS',
    'archives/GET_ARCHIVE_FAULURE',
)<string, Archive, void>();

export const createArchive = createAsyncAction(
    'archives/CREATE_ACHIVE_REQUEST',
    'archives/CREATE_ACHIVE_SUCCESS',
    'archives/CREATE_ACHIVE_FAULURE',
)<string, Archive, void>();

export const deleteArchive = createAsyncAction(
    'archives/DELETE_ACHIVE_REQUEST',
    'archives/DELETE_ACHIVE_SUCCESS',
    'archives/DELETE_ACHIVE_FAULURE',
)<string, deleteResult, void>();
