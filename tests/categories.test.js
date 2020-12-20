/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../src/app');
const db = require('../src/app/models');

describe('Testing the categories endpoints', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  test('respond with a json containing the created category', (done) => {
    const data = {
      title: 'Jest Framework',
      description: 'A Jest test',
    };

    request(app)
      .post('/category')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('respond with a json containing the updated category', (done) => {
    const data = {
      title: 'Jest Framework',
      description: 'A Jest test with update',
    };

    request(app)
      .put('/category/1')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('respond with a json containing a list of all categories', (done) => {
    request(app)
      .get('/category')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('respond with a json containing a unique category', (done) => {
    request(app)
      .get('/category/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('respond with a json stating that the category wasnt found', (done) => {
    request(app)
      .get('/category/5069')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  test('respond with a json stating that the category cant be created', (done) => {
    const data = {
      description: 'A Jest test',
    };

    request(app)
      .post('/category')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422, done);
  });

  test('should remove a category', (done) => {
    request(app)
      .delete('/category/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('shouldnt remove a category', (done) => {
    request(app)
      .delete('/category/5069')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  afterAll(async () => {
    await db.sequelize.close();
  });
});
