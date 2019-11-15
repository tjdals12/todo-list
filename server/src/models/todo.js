import { Schema, model } from 'mongoose';
import { Timestamp } from 'models/common/schema';
import DEFINE from './common';

const TodoSchema = new Schema({
    todo: String,
    tags: {
        type: Array,
        default: [],
    },
    effStaDt: {
        type: Date,
        default: DEFINE.dateNow,
    },
    effEndDt: {
        type: Date,
        default: DEFINE.dateNow,
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
    const { todo, tags } = params;
    const newTodo = new this({ todo, tags });

    return newTodo.save();
};

export default model('Todo', TodoSchema);
