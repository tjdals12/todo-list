import config from 'configs';
import clc from 'cli-color';
import * as db from 'models';
import app from 'app';
import request from 'supertest';
import { expect } from 'chai';

const { port: PORT } = config;

describe(clc.bgGreen(clc.black('[ Archive ]')), () => {
    let server;
    let id;

    before(done => {
        db.connect().then(type => {
            console.log(clc.yellow(`    Connected ${type}`));

            server = app.listen(PORT, () => {
                console.log(clc.yellow(`    Server running at ${PORT}`));
                done();
            });
        });
    });

    after(done => {
        db.close()
            .then(() => {
                server.close();
                done();
            })
            .catch(err => done(err));
    });

    it('addArchive', done => {
        request(server)
            .post('/api/archives')
            .send({
                title: 'Archive 추가',
            })
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                id = ctx.body.data._id;

                expect(ctx.body.data.title).to.equals('Archive 추가');
                done();
            });
    });

    it('getArchives', done => {
        request(server)
            .get('/api/archives')
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                expect(ctx.body.data).have.length(1);
                done();
            });
    });

    it('getArchive', done => {
        request(server)
            .get(`/api/archives/${id}`)
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                expect(ctx.body.data._id).to.equals(id);
                done();
            });
    });

    it('deleteArchive', done => {
        request(server)
            .delete(`/api/archives/${id}`)
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                expect(ctx.body.data.deletedCount).to.equals(1);
                done();
            });
    });
});
