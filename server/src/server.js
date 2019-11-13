import config from 'configs';
import * as db from 'models';
import app from 'app';

const { port: PORT } = config;

db.connect().then(type => {
    console.log(`Connected ${type}`);

    app.listen(PORT, () => {
        console.log(`Server running at ${PORT}`);
    });
});
