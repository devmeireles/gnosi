/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../src/app');
const db = require('../src/app/models');
const userData = require('./util/userData');
const catalogueData = require('./util/catalogueData');
const languageData = require('./util/languageData');
const categoryData = require('./util/categoryData');
const factory = require('./factories/factories');

describe('Testing the catalogues endpoints', () => {
  let token;
  beforeAll(async (done) => {
    await db.sequelize.sync({ force: true });

    await userData.createUser();
    await languageData.createLanguage();
    await categoryData.createCategory();

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

  test('respond with a json containing the created catalogue', async (done) => {
    const catalogue = await catalogueData.getCatalogue();
    request(app)
      .post('/catalogue')
      .set('Authorization', `Bearer ${token}`)
      .send(catalogue)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('respond with a json containing the updated catalogue', async (done) => {
    const catalogue = await catalogueData.getCatalogue();

    request(app)
      .put('/catalogue/1')
      .set('Authorization', `Bearer ${token}`)
      .send(catalogue)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('It should add an objective to the catalogue', async (done) => {
    const objective = await catalogueData.getObjective();
    request(app)
      .post('/catalogue/1/objective')
      .set('Authorization', `Bearer ${token}`)
      .send(objective)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("It shouldn't add an objective to the catalogue", async (done) => {
    request(app)
      .post('/catalogue/1/objective')
      .set('Authorization', `Bearer ${token}`)
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422, done);
  });

  test('It should add languages to the catalogue', async (done) => {
    const languages = {
      languages: [1],
    };
    request(app)
      .post('/catalogue/1/language')
      .set('Authorization', `Bearer ${token}`)
      .send(languages)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("It shouldn't add languages to the catalogue", async (done) => {
    request(app)
      .post('/catalogue/1/language')
      .set('Authorization', `Bearer ${token}`)
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  test('should remove a language from catalogue', (done) => {
    request(app)
      .delete('/catalogue/language/1')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("shouldn't remove a catalogue", (done) => {
    request(app)
      .delete('/catalogue/language/5069')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  test('respond with a json containing a list of all catalogues', (done) => {
    request(app)
      .get('/catalogue')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('respond with a json containing a unique catalogue', (done) => {
    request(app)
      .get('/catalogue/1')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("respond with a json stating that the catalogue wasn't found", (done) => {
    request(app)
      .get('/catalogue/5069')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  test('respond with a json stating that the catalogue cant be created', (done) => {
    request(app)
      .post('/catalogue')
      .set('Authorization', `Bearer ${token}`)
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422, done);
  });

  test('should remove a catalogue', (done) => {
    request(app)
      .delete('/catalogue/1')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("shouldn't remove a catalogue", (done) => {
    request(app)
      .delete('/catalogue/5069')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  test('It should add categories to the catalogue', async (done) => {
    await catalogueData.createCatalogue();
    const categories = {
      categories: [1],
    };
    request(app)
      .post('/catalogue/2/category')
      .set('Authorization', `Bearer ${token}`)
      .send(categories)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("It shouldn't add categories to the catalogue", async (done) => {
    const categories = {
      categories: [],
    };
    request(app)
      .post('/catalogue/1/category')
      .set('Authorization', `Bearer ${token}`)
      .send(categories)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422, done);
  });

  test('should remove a category from catalogue', (done) => {
    request(app)
      .delete('/catalogue/category/1')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test("shouldn't remove a category from the catalogue", (done) => {
    request(app)
      .delete('/catalogue/category/5069')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  afterAll(async () => {
    await db.sequelize.close();
  });
});
