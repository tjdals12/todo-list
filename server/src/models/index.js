import config from 'configs';
import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';

const { env: ENV, dbUri: DB_URI, dbUser: DB_USER, dbPass: DB_PASS } = config;

export const connect = () => {
    return new Promise((resolve, reject) => {
        if (ENV === 'test') {
            const mockgoose = new Mockgoose(mongoose);

            mockgoose.prepareStorage().then(() => {
                mongoose
                    .connect(DB_URI, {
                        useNewUrlParser: true,
                        useCreateIndex: true,
                        useUnifiedTopology: true,
                        useFindAndModify: false,
                    })
                    .then((res, err) => {
                        if (err) reject(err);

                        resolve('Mockgoose');
                    });
            });
        } else {
            mongoose
                .connect(DB_URI, {
                    useNewUrlParser: true,
                    useCreateIndex: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false,
                    user: DB_USER,
                    pass: DB_PASS,
                })
                .then((res, err) => {
                    if (err) reject(err);

                    resolve('Mongoose');
                });
        }
    });
};

export const close = () => {
    return mongoose.disconnect();
};
