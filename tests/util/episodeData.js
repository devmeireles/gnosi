const faker = require('faker');
const EpisodeService = require('../../src/app/services/EpisodeService');

exports.getEpisode = async () => ({
  title: faker.hacker.phrase(),
  description: faker.commerce.productDescription(),
  season_id: 1,
  media_id: 1,
});

exports.createSeason = async () => {
  const episodeData = await this.getEpisode();

  await EpisodeService.create(episodeData);
};
