import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const configs = {
    base: {
        env,
        port: process.env.PORT || 4000,
        dbUri: process.env.DB_URI,
        dbUser: process.env.DB_USER,
        dbPass: process.env.DB_PASS,
    },
    development: {},
    production: {},
    test: {
        dbUri: 'mongodb://127.0.0.1:27017/admin',
    },
};

const config = Object.assign(configs.base, configs[env]);

export default config;
