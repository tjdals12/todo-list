import { createAction } from 'typesafe-actions';

export const REQUEST_ARCHIVES = 'archive/REQUEST_ARCHIVES';
export const SUCCESS_ARCHIVE = 'archive/SUCCESS_ARCHIVE';
export const FAILURE_ARCHIVE = 'archive/FAILURE_ARCHIVE';

export const requestArchives = createAction(REQUEST_ARCHIVES)();
export const successArchives = createAction(SUCCESS_ARCHIVE)();
export const failureArchives = createAction(FAILURE_ARCHIVE)();
