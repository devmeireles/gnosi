/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../src/app');
const db = require('../src/app/models');
const userData = require('./util/userData');
const catalogueData = require('./util/catalogueData');
const seasonData = require('./util/seasonData');
const episodeData = require('./util/episodeData');

describe('Testing the episodes endpoints', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });

    await userData.createUser();
    await catalogueData.createCatalogue();
    await seasonData.createSeason();
  });

  test('It should create a episode and return the created data', async (done) => {
    const episode = await episodeData.getEpisode();
    console.log(episode);
    request(app)
      .post('/episode')
      .send(episode)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('It should update a episode', async (done) => {
    const episode = await episodeData.getEpisode();
    request(app)
      .put('/episode/1')
      .send(episode)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('It should return a episode', (done) => {
    request(app)
      .get('/episode/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("It should return a json stating that the episode wasn't found", (done) => {
    request(app)
      .get('/episode/5069')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  test("It shouldn't create a episode", (done) => {
    request(app)
      .post('/episode')
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422, done);
  });

  test('It should remove a episode', (done) => {
    request(app)
      .delete('/episode/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("It shouldn't remove a episode", (done) => {
    request(app)
      .delete('/episode/5069')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  afterAll(async () => {
    await db.sequelize.close();
  });
});