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
