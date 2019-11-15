import { Schema, model } from 'mongoose';
import DEFINE from 'models/common';

const Timestamp = new Schema(
    {
        regId: {
            type: String,
            default: DEFINE.COMMON.SYSTEM,
        },
        regDt: {
            type: Date,
            default: DEFINE.dateNow,
            get: DEFINE.dateConverter,
        },
        updId: {
            type: String,
            default: DEFINE.COMMON.SYSTEM,
        },
        updDt: {
            type: Date,
            default: DEFINE.dateNow,
            get: DEFINE.dateConverter,
        },
    },
    { _id: false, id: false },
);

Timestamp.set('toJSON', { getters: true });

export default model('Timestamp', Timestamp);
