/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../src/app');
const db = require('../src/app/models');
const userData = require('./util/userData');
const catalogueData = require('./util/catalogueData');
const seasonData = require('./util/seasonData');

describe('Testing the seasons endpoints', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });

    await userData.createUser();
    await catalogueData.createCatalogue();
    await seasonData.createSeason();
  });

  test('It should create a season and return the created data', async (done) => {
    const season = await seasonData.getSeason();
    request(app)
      .post('/season')
      .send(season)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('It should update a season', async (done) => {
    const season = await seasonData.getSeason();
    request(app)
      .put('/season/1')
      .send(season)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('It should return a season', (done) => {
    request(app)
      .get('/season/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("It should return a json stating that the category wasn't found", (done) => {
    request(app)
      .get('/season/5069')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  test("It shouldn't create a season", (done) => {
    request(app)
      .post('/season')
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422, done);
  });

  test('It should remove a season', (done) => {
    request(app)
      .delete('/season/2')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("It shouldn't remove a season", (done) => {
    request(app)
      .delete('/season/5069')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  afterAll(async () => {
    await db.sequelize.close();
  });
});
