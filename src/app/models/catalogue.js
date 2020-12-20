const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Catalogue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.Catalogue.hasMany(models.Season, { as: 'seasons' });
      // models.Catalogue.belongsTo(models.User, { as: 'owner' });
    }
  }
  Catalogue.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    ownerId: DataTypes.INTEGER,
    mediaId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Catalogue',
  });
  return Catalogue;
};
