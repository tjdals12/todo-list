import config from 'configs';
import morgan from 'koa-morgan';
import fs from 'fs';
import moment from 'moment';

const { env: ENV } = config;

export default app => {
    if (ENV === 'development') {
        app.use(
            morgan('dev', {
                stream: fs.createWriteStream(
                    `${__dirname}/logs/access_${moment().format(
                        'YYYY-MM-DD',
                    )}.log`,
                    { flags: 'a' },
                ),
            }),
        );
    }

    if (ENV === 'production') {
        app.use(
            morgan('combined', {
                stream: fs.createWriteStream(
                    `${__dirname}/logs/error_${moment().format(
                        'YYYY-MM-DD',
                    )}.log`,
                    { flags: 'a' },
                ),
                skip: (req, res) => res.statusCode < 200,
            }),
        );
    }
};
