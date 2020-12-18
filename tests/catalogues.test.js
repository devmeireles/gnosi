const request = require('supertest');

const app = require('../src/app');
const db = require('../src/app/models');
const UserService = require('../src/app/services/UserService');

describe('Testing the catalogues endpoints', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });

    const userData = {
      name: 'First User',
      email: 'user1@mail.com',
      password: 'aStrongPass0wrd!',
      username: 'devmeireles',
    };

    await UserService.create(userData);
  });

  it('respond with a json containing the created catalogue', (done) => {
    const data = {
      title: 'Jest Framework',
      description: 'A Jest test',
      price: 20.4,
      ownerId: 1,
      mediaId: 1,
    };

    request(app)
      .post('/catalogue')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
