/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../src/app');
const db = require('../src/app/models');
const userData = require('./util/userData');

describe('Testing the auth endpoints', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  test('It should validate the login and generate a jwt', async (done) => {
    const user = await userData.createUser();
    const { username, password } = user;
    const loginData = {
      username,
      password,
    };
    request(app)
      .post('/auth/login')
      .send(loginData)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("It shouldn't validate the login", (done) => {
    request(app)
      .post('/auth/login')
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  afterAll(async () => {
    await db.sequelize.close();
  });
});
