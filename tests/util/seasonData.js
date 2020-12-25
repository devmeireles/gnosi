const faker = require('faker');
const SeasonService = require('../../src/app/services/SeasonService');

exports.getSeason = async () => ({
  title: faker.hacker.phrase(),
  description: faker.commerce.productDescription(),
  catalogue_id: 1,
});

exports.createSeason = async () => {
  const seasonData = await this.getSeason();

  await SeasonService.create(seasonData);
};
