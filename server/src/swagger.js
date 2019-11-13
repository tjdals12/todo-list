import swaggerUI from 'swagger-ui-koa';
import swaggerJSDoc from 'swagger-jsdoc';
import convert from 'koa-convert';
import mount from 'koa-mount';

const options = swaggerJSDoc({
    swaggerDefinition: {
        info: {
            title: 'Todo-list API',
            description: 'API for Todo-list',
            version: '1.0.0',
        },
    },
    apis: ['./src/apis/*/index.js', './src/apis/index.js'],
});

export default app => {
    app.use(swaggerUI.serve);
    app.use(convert(mount('/swagger', swaggerUI.setup(options))));
};
