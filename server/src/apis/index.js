import Router from 'koa-router';
import archive from 'apis/archive';
import todo from 'apis/todo';

const api = new Router();

api.use('/archives', archive.routes());
api.use('/todos', todo.routes());

export default api;
