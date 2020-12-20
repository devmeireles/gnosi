const faker = require('faker');
const UserService = require('../../src/app/services/UserService');

exports.createUser = async () => {
  const userData = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    username: faker.internet.userName(),
  };

  await UserService.create(userData);
};
