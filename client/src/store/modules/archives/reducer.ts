import { createReducer } from 'typesafe-actions';
import produce from 'immer';
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
    archiveId: '',
    todoId: '',
    lastPage: 1,
};

export default createReducer<archivesStateTypes, archivesActionTypes>(
    initialState,
    {
        /** GET LIST */
        'archives/GET_ARCHIVES_SUCCESS': (state, action) => {
            // ! immer는 깊은 값을 수정할 때 사용하는 것을 권장함.
            return produce(state, draft => {
                draft.archives = action.payload.archives;
                draft.lastPage = action.payload.lastPage;
            });
        },
        'archives/GET_ARCHIVES_FAILURE': state => state,

        /** GET ONE */
        'archives/GET_ARCHIVE_SUCCESS': (state, action) => ({
            ...state,
            archive: action.payload,
        }),
        'archives/GET_ARCHIVE_FAILURE': state => state,

        /** CREATE */
        'archives/CREATE_ACHIVE_SUCCESS': (state, action) => ({
            ...state,
            archive: action.payload,
        }),
        'archives/CREATE_ACHIVE_FAILURE': state => state,

        /** EDIT */
        'archives/EDIT_ACHIVE_SUCCESS': (state, action) => ({
            ...state,
            archive: action.payload,
        }),
        'archives/EDIT_ACHIVE_FAILURE': state => state,

        /** DELETE */
        'archives/DELETE_ACHIVE_SUCCESS': state => state,
        'archives/DELETE_ACHIVE_FAILURE': state => state,

        /** DELETE TODO */
        'archives/DELETE_TODO_SUCCESS': (state, action) => ({
            ...state,
            archive: action.payload,
        }),
        'archives/DELETE_TODO_FAILURE': state => state,
        'archives/SET_TARGET': (state, action) => ({
            ...state,
            [action.payload.name]: action.payload.value,
        }),
    },
);
