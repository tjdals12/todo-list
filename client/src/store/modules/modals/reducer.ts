import { createReducer } from 'typesafe-actions';
import { modalsStateType, modalsActionTypes } from './types';
import { OPEN, CLOSE } from './action';

const initialState: modalsStateType = {
    addTodoModal: false,
    archiveCreateModal: false,
};

export default createReducer<modalsStateType, modalsActionTypes>(initialState, {
    [OPEN]: (state, action) => ({ ...state, [action.payload]: true }),
    [CLOSE]: (state, action) => ({ ...state, [action.payload]: false }),
});
