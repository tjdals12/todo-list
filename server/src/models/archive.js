import { Schema, model } from 'mongoose';
import { Timestamp } from 'models/common/schema';

const ArchiveSchema = new Schema({
    title: String,
    todos: {
        type: Array,
        default: [],
    },
    timestamp: {
        type: Timestamp.schema,
        default: Timestamp,
    },
});

ArchiveSchema.set('toJSON', { getters: true });

ArchiveSchema.statics.createArchive = function(params) {
    const { title } = params;
    const archive = new this({ title });

    return archive.save();
};

export default model('Archive', ArchiveSchema);
