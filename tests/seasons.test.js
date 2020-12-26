/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../src/app');
const db = require('../src/app/models');
const userData = require('./util/userData');
const catalogueData = require('./util/catalogueData');
const seasonData = require('./util/seasonData');
const factory = require('./factories/factories');

describe('Testing the seasons endpoints', () => {
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

  test('It should create a season and return the created data', async (done) => {
    const season = await seasonData.getSeason();
    request(app)
      .post('/season')
      .set('Authorization', `Bearer ${token}`)
      .send(season)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('It should update a season', async (done) => {
    const season = await seasonData.getSeason();
    request(app)
      .put('/season/1')
      .set('Authorization', `Bearer ${token}`)
      .send(season)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('It should return a season', (done) => {
    request(app)
      .get('/season/1')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("It should return a json stating that the category wasn't found", (done) => {
    request(app)
      .get('/season/5069')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  test("It shouldn't create a season", (done) => {
    request(app)
      .post('/season')
      .set('Authorization', `Bearer ${token}`)
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422, done);
  });

  test('It should remove a season', (done) => {
    request(app)
      .delete('/season/2')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("It shouldn't remove a season", (done) => {
    request(app)
      .delete('/season/5069')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  afterAll(async () => {
    await db.sequelize.close();
  });
});
