import { createReducer } from 'typesafe-actions';
import { archivesActionTypes, archivesStateTypes } from './types';

const initialState: archivesStateTypes = {
    archives: [],
    archive: {
        _id: '',
        title: '',
        todos: [],
        timestamp: {
            regId: '',
            regDt: '',
            updId: '',
            updDt: '',
        },
    },
};

export default createReducer<archivesStateTypes, archivesActionTypes>(
    initialState,
    {
        /** GET LIST */
        'archives/GET_ARCHIVES_SUCCESS': (state, action) => ({
            ...state,
            archives: action.payload,
        }),
        'archives/GET_ARCHIVES_FAULURE': state => state,

        /** GET ONE */
        'archives/GET_ARCHIVE_SUCCESS': (state, action) => ({
            ...state,
            archive: action.payload,
        }),
        'archives/GET_ARCHIVE_FAULURE': state => state,

        /** CREATE */
        'archives/CREATE_ACHIVE_SUCCESS': (state, action) => ({
            ...state,
            archive: action.payload,
        }),
        'archives/CREATE_ACHIVE_FAULURE': state => state,

        /** DELETE */
        'archives/DELETE_ACHIVE_SUCCESS': state => state,
        'archives/DELETE_ACHIVE_FAULURE': state => state,
    },
);