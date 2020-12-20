const faker = require('faker');

exports.getCatalogue = async () => ({
  title: faker.hacker.phrase(),
  description: faker.commerce.productDescription(),
  price: faker.commerce.price(),
  ownerId: 1,
  mediaId: 1,
});
