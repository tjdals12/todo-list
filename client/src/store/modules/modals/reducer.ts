import { createReducer } from 'typesafe-actions';
import { modalsStateType, modalsActionTypes } from './types';
import { OPEN, CLOSE } from './action';

const initialState: modalsStateType = {
    todoAddModal: false,
    todoDeleteModal: false,
    archiveCreateModal: false,
    archiveEditModal: false,
};

export default createReducer<modalsStateType, modalsActionTypes>(initialState, {
    [OPEN]: (state, action) => ({ ...state, [action.payload]: true }),
    [CLOSE]: (state, action) => ({ ...state, [action.payload]: false }),
});
