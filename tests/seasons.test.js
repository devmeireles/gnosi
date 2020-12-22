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

  test('respond with a json containing the created season', async (done) => {
    const season = await seasonData.getSeason();
    request(app)
      .post('/season')
      .send(season)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
