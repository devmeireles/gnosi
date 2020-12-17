'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Seasons', [{
      title: 'Introduction',
      description: 'A Introduction of the course',
      catalogueId: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }], {});

    await queryInterface.bulkInsert('Seasons', [{
      title: 'Advancing',
      catalogueId: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }], {});

    await queryInterface.bulkInsert('Seasons', [{
      title: 'Starting',
      catalogueId: 2,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
