/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../src/app');
const db = require('../src/app/models');
const userData = require('./util/userData');

describe('Testing the register endpoints', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  test('It should create an user and return the created data', async (done) => {
    const user = await userData.getUser();
    request(app)
      .post('/user/register')
      .send(user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("It shouldn't create an user", (done) => {
    request(app)
      .post('/user/register')
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422, done);
  });

  afterAll(async () => {
    await db.sequelize.close();
  });
});
