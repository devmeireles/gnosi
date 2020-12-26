module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Master',
          email: 'dev.meireles@gmail.com',
          password: 'aSecretPassword',
          username: 'master',
          type_id: 1,
          created_at: Date.now(),
          updated_at: Date.now(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Teacher',
          email: 'dev.meireles+teacher@gmail.com',
          password: 'aSecretPassword',
          username: 'teacher',
          type_id: 2,
          created_at: Date.now(),
          updated_at: Date.now(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Another Teacher',
          email: 'dev.meireles+teacher2@gmail.com',
          password: 'aSecretPassword',
          username: 'teacher2',
          type_id: 2,
          created_at: Date.now(),
          updated_at: Date.now(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Student',
          email: 'dev.meireles+student@gmail.com',
          password: 'aSecretPassword',
          username: 'student',
          type_id: 3,
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
     * await queryInterface.bulkDelete('User', null, {});
     */
  },
};
