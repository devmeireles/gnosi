const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CatalogueObjective extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.CatalogueObjective.belongsTo(models.Catalogue);
    }
  }
  CatalogueObjective.init(
    {
      catalogue_id: DataTypes.INTEGER,
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'CatalogueObjective',
      underscored: true,
    }
  );
  return CatalogueObjective;
};
