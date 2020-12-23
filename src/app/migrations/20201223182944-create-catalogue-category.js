module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('catalogue_categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      catalogueId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'catalogues',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('catalogue_categories');
  },
};
