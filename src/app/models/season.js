const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Season extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.Season.hasMany(models.Episode, { as: 'episodes' });
      // models.Season.belongsTo(models.Catalogue, { foreignKey: 'catalogueId' });
    }
  }
  Season.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    CatalogueId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updateAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Season',
  });
  return Season;
};