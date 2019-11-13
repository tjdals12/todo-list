import { Schema, model } from 'mongoose';
import DEFINE from 'models/common';

const Timestamp = new Schema({
    regId: {
        type: String,
        default: DEFINE.COMMON.SYSTEM,
    },
    regDt: {
        type: Date,
        default: DEFINE.dateNow,
    },
    updId: {
        type: String,
        default: DEFINE.COMMON.SYSTEM,
    },
    updDt: {
        type: Date,
        default: DEFINE.dateNow,
    },
});

export default model('Timestamp', Timestamp);
