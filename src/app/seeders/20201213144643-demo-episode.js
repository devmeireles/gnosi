module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'episodes',
      [
        {
          title: 'Ep 1',
          seasonId: 1,
          mediaId: 1,
          created_at: Date.now(),
          updated_at: Date.now(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'episodes',
      [
        {
          title: 'Ep 2',
          seasonId: 1,
          mediaId: 1,
          created_at: Date.now(),
          updated_at: Date.now(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'episodes',
      [
        {
          title: 'Ep 3',
          seasonId: 1,
          mediaId: 1,
          created_at: Date.now(),
          updated_at: Date.now(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'episodes',
      [
        {
          title: 'Ep 4',
          seasonId: 1,
          mediaId: 1,
          created_at: Date.now(),
          updated_at: Date.now(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'episodes',
      [
        {
          title: 'Ep 1 pt 1',
          seasonId: 2,
          created_at: Date.now(),
          updated_at: Date.now(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'episodes',
      [
        {
          title: 'Ep 2 pt 2',
          seasonId: 2,
          created_at: Date.now(),
          updated_at: Date.now(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'episodes',
      [
        {
          title: 'Ep 3',
          seasonId: 2,
          created_at: Date.now(),
          updated_at: Date.now(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
