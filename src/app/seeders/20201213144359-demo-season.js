module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'seasons',
      [
        {
          title: 'Introduction',
          description: 'A Introduction of the course',
          catalogue_id: 1,
          created_at: Date.now(),
          updated_at: Date.now(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'seasons',
      [
        {
          title: 'Advancing',
          catalogue_id: 1,
          created_at: Date.now(),
          updated_at: Date.now(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'seasons',
      [
        {
          title: 'Starting',
          catalogue_id: 2,
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
