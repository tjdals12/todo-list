import { Schema, model } from 'mongoose';
import { Timestamp } from 'models/common/schema';
import Todo from './todo';

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

ArchiveSchema.statics.deleteTodo = async function(archive, todo) {
    await Todo.deleteOne({ _id: todo });

    return this.findByIdAndUpdate(
        archive,
        {
            $pull: {
                todos: todo,
            },
        },
        {
            new: true,
        },
    ).populate({ path: 'todos' });
};

export default model('Archive', ArchiveSchema);
