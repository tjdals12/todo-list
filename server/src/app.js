import '@babel/polyfill';

import Koa from 'koa';
import cors from 'koa2-cors';
import bodyParser from 'koa-bodyparser';
import helmet from 'koa-helmet';
import router from 'routes';
import loggerSetting from 'logger';
import swaggerSetting from 'swagger';

const app = new Koa();

app.use(
    bodyParser({
        enableTypes: ['json', 'formData'],
        jsonLimit: '10mb',
        formLimit: '10mb',
    }),
);
app.use(
    cors({
        origin: '*',
        allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'],
        allowHeaders: ['Content-Type', 'Authorization'],
        exposeHeaders: ['Content-Length', 'Date'],
    }),
);
app.use(helmet());
app.use(router.routes());
app.use(router.allowedMethods());
loggerSetting(app);
swaggerSetting(app);

export default app;
