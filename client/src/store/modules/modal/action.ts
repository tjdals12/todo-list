import { createAction } from 'typesafe-actions';

export const OPEN = 'modals/OPEN';
export const CLOSE = 'modals/CLOSE';

export const open = createAction(OPEN, (name: string) => name)();
export const close = createAction(CLOSE, (name: string) => name)();
