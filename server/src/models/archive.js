import { Schema, model } from 'mongoose';
import { Timestamp } from 'models/common/schema';

const ArchiveSchema = new Schema({
    title: String,
    todos: {
        type: Array,
        default: [],
    },
    Timestamp: {
        type: Timestamp.schema,
        default: Timestamp,
    },
});

ArchiveSchema.statics.createArchive = function(params) {
    const { title } = params;
    const archive = new this({ title });

    return archive.save();
};

export default model('Archive', ArchiveSchema);
