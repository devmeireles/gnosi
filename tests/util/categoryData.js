const faker = require('faker');
const CategoryService = require('../../src/app/services/CategoryService');

exports.getCategory = async () => ({
  title: faker.hacker.phrase(),
  description: faker.commerce.productDescription(),
});

exports.createCategory = async () => {
  const categoryData = await this.getCategory();

  const data = await CategoryService.create(categoryData);

  return data;
};
