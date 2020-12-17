module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: 'Master',
      email: 'dev.meireles@gmail.com',
      password: 'aSecretPassword',
      username: 'master',
      typeId: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }], {});

    await queryInterface.bulkInsert('Users', [{
      name: 'Teacher',
      email: 'dev.meireles+teacher@gmail.com',
      password: 'aSecretPassword',
      username: 'teacher',
      typeId: 2,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }], {});

    await queryInterface.bulkInsert('Users', [{
      name: 'Another Teacher',
      email: 'dev.meireles+teacher2@gmail.com',
      password: 'aSecretPassword',
      username: 'teacher2',
      typeId: 2,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }], {});

    await queryInterface.bulkInsert('Users', [{
      name: 'Student',
      email: 'dev.meireles+student@gmail.com',
      password: 'aSecretPassword',
      username: 'student',
      typeId: 3,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }], {});
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
