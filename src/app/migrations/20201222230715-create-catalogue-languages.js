module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('catalogue_languages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      catalogue_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'catalogues',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      language_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'languages',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      created_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('catalogue_languages');
  },
};
