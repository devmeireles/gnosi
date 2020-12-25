module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      biography: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      status: {
        allowNull: true,
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      public: {
        allowNull: true,
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      type_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      avatar_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
