/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../src/app');
const db = require('../src/app/models');
const userData = require('./util/userData');
const catalogueData = require('./util/catalogueData');

describe('Testing the catalogues endpoints', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });

    await userData.createUser();
  });

  test('respond with a json containing the created catalogue', async (done) => {
    const catalogue = await catalogueData.getCatalogue();
    request(app)
      .post('/catalogue')
      .send(catalogue)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('respond with a json containing the updated catalogue', async (done) => {
    const catalogue = await catalogueData.getCatalogue();

    request(app)
      .put('/catalogue/1')
      .send(catalogue)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('respond with a json containing a list of all catalogues', (done) => {
    request(app)
      .get('/catalogue')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('respond with a json containing a unique catalogue', (done) => {
    request(app)
      .get('/catalogue/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("respond with a json stating that the catalogue wasn't found", (done) => {
    request(app)
      .get('/catalogue/5069')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  test('respond with a json stating that the catalogue cant be created', (done) => {
    request(app)
      .post('/catalogue')
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422, done);
  });

  test('should remove a catalogue', (done) => {
    request(app)
      .delete('/catalogue/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("shouldn't remove a catalogue", (done) => {
    request(app)
      .delete('/catalogue/5069')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });
});
