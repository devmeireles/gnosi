/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../src/app');
const db = require('../src/app/models');
const userData = require('./util/userData');
const catalogueData = require('./util/catalogueData');
const seasonData = require('./util/seasonData');
const episodeData = require('./util/episodeData');
const factory = require('./factories/factories');

describe('Testing the episodes endpoints', () => {
  beforeAll(async (done) => {
    await db.sequelize.sync({ force: true });

    await userData.createUser();
    await catalogueData.createCatalogue();
    await seasonData.createSeason();

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

  test('It should create a episode and return the created data', async (done) => {
    const episode = await episodeData.getEpisode();
    request(app)
      .post('/episode')
      .set('Authorization', `Bearer ${token}`)
      .send(episode)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('It should update a episode', async (done) => {
    const episode = await episodeData.getEpisode();
    request(app)
      .put('/episode/1')
      .set('Authorization', `Bearer ${token}`)
      .send(episode)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('It should return a episode', (done) => {
    request(app)
      .get('/episode/1')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("It should return a json stating that the episode wasn't found", (done) => {
    request(app)
      .get('/episode/5069')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  test("It shouldn't create a episode", (done) => {
    request(app)
      .post('/episode')
      .set('Authorization', `Bearer ${token}`)
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422, done);
  });

  test('It should remove a episode', (done) => {
    request(app)
      .delete('/episode/1')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("It shouldn't remove a episode", (done) => {
    request(app)
      .delete('/episode/5069')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  afterAll(async () => {
    await db.sequelize.close();
  });
});
