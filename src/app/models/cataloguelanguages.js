const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CatalogueLanguages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CatalogueLanguages.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      slug: {
        type: DataTypes.TEXT,
      },
      catalogue_id: DataTypes.INTEGER,
      language_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'CatalogueLanguages',
      underscored: true,
    }
  );
  return CatalogueLanguages;
};
