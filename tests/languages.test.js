/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../src/app');
const db = require('../src/app/models');
const languageData = require('./util/languageData');

exports.languages = describe('Testing the languages endpoints', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  test('It should create a language and return the created data', async (done) => {
    const language = await languageData.getLanguage();
    request(app)
      .post('/language')
      .send(language)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('It should update a language', async (done) => {
    const language = await languageData.getLanguage();
    request(app)
      .put('/language/1')
      .send(language)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('It should return a language', (done) => {
    request(app)
      .get('/language/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("It should return a json stating that the language wasn't found", (done) => {
    request(app)
      .get('/language/5069')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  test("It shouldn't create a language", (done) => {
    request(app)
      .post('/language')
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422, done);
  });

  test('It should remove a language', (done) => {
    request(app)
      .delete('/language/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("It shouldn't remove a language", (done) => {
    request(app)
      .delete('/language/5069')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  afterAll(async () => {
    await db.sequelize.close();
  });
});
