import { ActionType } from 'typesafe-actions';
import { Timestamp } from 'store/modules/common/types';
import {
    getArchives,
    getArchive,
    createArchive,
    deleteArchive,
} from './action';

const actions = { getArchives, getArchive, createArchive, deleteArchive };
export type archivesActionTypes = ActionType<typeof actions>;

export type Archive = {
    _id: string;
    title: string;
    todos: Array<object>;
    timestamp: Timestamp;
};

export type deleteResult = {
    ok: number;
    deletedCount: number;
};

export type archivesStateTypes = {
    archives: Archive[];
    archive: Archive;
};
