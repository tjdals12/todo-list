import config from 'configs';
import clc from 'cli-color';
import * as db from 'models';
import app from 'app';
import request from 'supertest';
import { expect } from 'chai';

const { port: PORT } = config;

describe(clc.bgGreen(clc.black('[ Todo ]')), () => {
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

    it('addTodo', done => {
        request(server)
            .post(`/api/todos`)
            .send({
                todo: 'Typescript로 사이드 프로젝트 해보기',
                tags: ['Typescript', '프로젝트'],
            })
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                id = ctx.body.data._id;
                const { todo, tags, isDone } = ctx.body.data;

                expect(todo).to.equals('Typescript로 사이드 프로젝트 해보기');
                expect(tags).have.length(2);
                expect(isDone).to.equals(false);
                done();
            });
    });

    it('getTodo', done => {
        request(server)
            .get(`/api/todos/${id}`)
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                expect(ctx.body.data).instanceOf(Object);
                done();
            });
    });

    it('getTodos', done => {
        request(server)
            .get('/api/todos')
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                expect(ctx.body.data).instanceOf(Array);
                expect(ctx.body.data).have.length(1);
                done();
            });
    });
});
