import { ActionType } from 'typesafe-actions';
import { Timestamp } from 'store/modules/common/types';
import { Todo } from 'store/modules/todos';
import {
    getArchives,
    getArchive,
    createArchive,
    editArchive,
    deleteArchive,
    deleteTodo,
    setTarget,
} from './action';

const actions = {
    getArchives,
    getArchive,
    createArchive,
    editArchive,
    deleteArchive,
    deleteTodo,
    setTarget,
};
export type archivesActionTypes = ActionType<typeof actions>;

export type Archive = {
    _id: string;
    title: string;
    todos: Array<Todo>;
    timestamp: Timestamp;
};

export type deleteResult = {
    ok: number;
    deletedCount: number;
};

export type archivesStateTypes = {
    archives: Archive[];
    archive: Archive;
    archiveId: string;
    todoId: string;
    lastPage: number;
};
