'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Episodes', [{
      title: 'Ep 1',
      seasonId: 1,
      mediaId: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }], {});

    await queryInterface.bulkInsert('Episodes', [{
      title: 'Ep 2',
      seasonId: 1,
      mediaId: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }], {});

    await queryInterface.bulkInsert('Episodes', [{
      title: 'Ep 3',
      seasonId: 1,
      mediaId: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }], {});

    await queryInterface.bulkInsert('Episodes', [{
      title: 'Ep 4',
      seasonId: 1,
      mediaId: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }], {});

    await queryInterface.bulkInsert('Episodes', [{
      title: 'Ep 1 pt 1',
      seasonId: 2,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }], {});

    await queryInterface.bulkInsert('Episodes', [{
      title: 'Ep 2 pt 2',
      seasonId: 2,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }], {});

    await queryInterface.bulkInsert('Episodes', [{
      title: 'Ep 3',
      seasonId: 2,
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
