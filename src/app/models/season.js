const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Season extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Season.hasMany(models.Episode, { as: 'episodes' });
      models.Season.belongsTo(models.Catalogue, { foreignKey: 'CatalogueId', as: 'catalogues' });
    }
  }
  Season.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      catalogue_id: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Season',
      underscored: true,
    }
  );
  return Season;
};
