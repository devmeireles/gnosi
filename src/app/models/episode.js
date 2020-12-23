const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Episode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.Episode.belongsTo(models.Season);
    }
  }
  Episode.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    SeasonId: DataTypes.INTEGER,
    mediaId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Episode',
  });
  return Episode;
};
