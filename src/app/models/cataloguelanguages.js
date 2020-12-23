const {
  Model,
} = require('sequelize');

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
  CatalogueLanguages.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    catalogueId: DataTypes.INTEGER,
    languageId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CatalogueLanguages',
  });
  return CatalogueLanguages;
};
