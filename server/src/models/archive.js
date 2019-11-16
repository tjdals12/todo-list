import { Schema, model } from 'mongoose';
import { Timestamp } from 'models/common/schema';

const ArchiveSchema = new Schema({
    title: String,
    todos: [
        {
            type: [Schema.Types.ObjectId],
            ref: 'Todo',
        },
    ],
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

ArchiveSchema.statics.addTodo = function(archive, todo) {
    return this.findByIdAndUpdate(
        archive,
        {
            $push: {
                todos: todo,
            },
        },
        {
            new: true,
        },
    );
};

export default model('Archive', ArchiveSchema);
