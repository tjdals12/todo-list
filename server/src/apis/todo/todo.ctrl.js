import Todo from 'models/todo';
import Joi from 'joi';

export const getTodos = async ctx => {
    try {
        const todos = await Todo.find();

        ctx.body = todos;
    } catch (e) {
        ctx.status = 500;
    }
};

export const getTodo = async ctx => {
    const { id } = ctx.params;

    try {
        const todo = await Todo.findById(id);

        ctx.body = todo;
    } catch (e) {
        ctx.status = 500;
    }
};

export const addTodo = async ctx => {
    const schema = Joi.object().keys({
        text: Joi.string().required(),
        tags: Joi.array()
            .items(Joi.string())
            .required(),
        effStaDt: Joi.string().optional(),
        effEndDt: Joi.string().optional(),
    });

    const result = Joi.validate(ctx.request.body, schema);

    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    try {
        const todo = await Todo.addTodo(ctx.request.body);

        ctx.body = todo;
    } catch (e) {
        ctx.status = 500;
    }
};
