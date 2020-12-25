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
    owner_id: DataTypes.INTEGER,
    media_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Catalogue',
    underscored: true,
  });
  return Catalogue;
};
