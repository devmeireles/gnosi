const faker = require('faker');
const UserService = require('../../src/app/services/UserService');

exports.getUser = async () => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.userName(),
  username: faker.internet.userName(),
});

exports.createUser = async () => {
  const userData = await this.getUser();
  const user = await UserService.create(userData);
  return user;
};
