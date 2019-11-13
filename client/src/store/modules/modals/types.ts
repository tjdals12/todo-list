import { ActionType } from 'typesafe-actions';
import { open, close } from './action';

const actions = { open, close };
export type modalsActionTypes = ActionType<typeof actions>;

export type modalsStateType = Record<string, boolean>;
