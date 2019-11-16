import Archive from 'models/archive';
import Joi from 'joi';

export const getArchives = async ctx => {
    const page = parseInt(ctx.query.page || 1, 10);

    if (page < 1) {
        ctx.status = 400;
        return;
    }

    try {
        const archives = await Archive.find()
            .sort({ 'timestamp.regDt': -1 })
            .skip((page - 1) * 10)
            .limit(10)
            .populate({ path: 'todos' });

        ctx.body = archives;
    } catch (e) {
        ctx.status = 500;
    }
};

export const getArchive = async ctx => {
    const { id } = ctx.params;

    try {
        const archive = await Archive.findById(id).populate({ path: 'todos' });

        ctx.body = archive;
    } catch (e) {
        ctx.status = 500;
    }
};

export const createArchive = async ctx => {
    const schema = Joi.object().keys({
        title: Joi.string().required(),
    });

    const result = Joi.validate(ctx.request.body, schema);

    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    try {
        const archive = await Archive.createArchive(ctx.request.body);

        ctx.body = archive;
    } catch (e) {
        ctx.status = 500;
    }
};

export const deleteArchive = async ctx => {
    const { id } = ctx.params;

    try {
        const result = await Archive.deleteOne({ _id: id });

        ctx.body = result;
    } catch (e) {
        ctx.status = 500;
    }
};
