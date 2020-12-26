/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../src/app');
const db = require('../src/app/models');
const languageData = require('./util/languageData');
const factory = require('./factories/factories');

describe('Testing the languages endpoints', () => {
  beforeAll(async (done) => {
    await db.sequelize.sync({ force: true });

    const user = await factory.create('User', {
      password: 'aStrongPassword',
    });

    request(app)
      .post('/auth/login')
      .send({
        username: user.username,
        password: 'aStrongPassword',
      })
      .end((err, response) => {
        token = response.body.token;
        done();
      });
  });

  test('It should create a language and return the created data', async (done) => {
    const language = await languageData.getLanguage();
    request(app)
      .post('/language')
      .set('Authorization', `Bearer ${token}`)
      .send(language)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('It should update a language', async (done) => {
    const language = await languageData.getLanguage();
    request(app)
      .put('/language/1')
      .set('Authorization', `Bearer ${token}`)
      .send(language)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('It should return a language', (done) => {
    request(app)
      .get('/language/1')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("It should return a json stating that the language wasn't found", (done) => {
    request(app)
      .get('/language/5069')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  test("It shouldn't create a language", (done) => {
    request(app)
      .post('/language')
      .set('Authorization', `Bearer ${token}`)
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422, done);
  });

  test('It should remove a language', (done) => {
    request(app)
      .delete('/language/1')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("It shouldn't remove a language", (done) => {
    request(app)
      .delete('/language/5069')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  afterAll(async () => {
    await db.sequelize.close();
  });
});
