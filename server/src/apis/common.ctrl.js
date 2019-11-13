import { Types } from 'mongoose';

export const checkObjectId = async (ctx, next) => {
    const { id } = ctx.params;

    if (!Types.ObjectId.isValid(id)) {
        ctx.status = 400;
        ctx.body = { id };
        return;
    }

    await next();
};
