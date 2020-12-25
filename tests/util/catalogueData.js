const faker = require('faker');

const CatalogueService = require('../../src/app/services/CatalogueService');

exports.getCatalogue = async () => ({
  title: faker.hacker.phrase(),
  description: faker.commerce.productDescription(),
  price: faker.commerce.price(),
  owner_id: 1,
  media_id: 1,
});

exports.getObjective = async () => ({
  title: faker.hacker.phrase(),
  description: faker.commerce.productDescription(),
  catalogue_id: 1,
});

exports.createCatalogue = async () => {
  const catalogueData = await this.getCatalogue();

  await CatalogueService.create(catalogueData);
};
