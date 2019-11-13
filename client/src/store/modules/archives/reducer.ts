import { createReducer } from 'typesafe-actions';
import { archiveActionTypes, archiveStateType } from './types';
import { REQUEST_ARCHIVES, SUCCESS_ARCHIVE, FAILURE_ARCHIVE } from './action';

const initialState: archiveStateType = {
    archives: [],
};

export default createReducer<archiveStateType, archiveActionTypes>(
    initialState,
    {
        [REQUEST_ARCHIVES]: (state, action) => state,
        [SUCCESS_ARCHIVE]: (state, action) => state,
        [FAILURE_ARCHIVE]: (state, action) => state,
    },
);
