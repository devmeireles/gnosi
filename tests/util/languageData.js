const faker = require('faker');
const LanguageService = require('../../src/app/services/LanguageService');

exports.getLanguage = async () => ({
  title: faker.hacker.phrase(),
});

exports.createLanguage = async () => {
  const languageData = await this.getLanguage();

  await LanguageService.create(languageData);
};
