import { Schema, model } from 'mongoose';
import { Timestamp } from 'models/common/schema';
import DEFINE from './common';

const TodoSchema = new Schema({
    text: String,
    tags: {
        type: Array,
        default: [],
    },
    effStaDt: {
        type: Date,
        default: DEFINE.dateNow,
        get: DEFINE.dateConverter,
    },
    effEndDt: {
        type: Date,
        default: DEFINE.dateNow,
        get: DEFINE.dateConverter,
    },
    isDone: {
        type: Boolean,
        default: false,
    },
    timestamp: {
        type: Timestamp.schema,
        default: Timestamp,
    },
});

TodoSchema.set('toJSON', { getters: true });

TodoSchema.statics.addTodo = async function(params) {
    const { text, tags } = params;
    const newTodo = new this({ text, tags });

    return newTodo.save();
};

export default model('Todo', TodoSchema);
