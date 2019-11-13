import { ActionType } from 'typesafe-actions';
import { requestArchives, successArchives, failureArchives } from './action';

const actions = { requestArchives, successArchives, failureArchives };
export type archiveActionTypes = ActionType<typeof actions>;

type Timestamp = {
    regId: string;
    regDt: string;
    updId: string;
    updDt: string;
};

export type Archive = {
    _id: string;
    title: string;
    timestamp: Timestamp;
};

export type archiveStateType = {
    archives: Archive[];
    archive?: Archive;
};
