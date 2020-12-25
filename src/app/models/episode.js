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
      models.Episode.belongsTo(models.Season);
    }
  }
  Episode.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    season_id: DataTypes.INTEGER,
    media_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Episode',
    underscored: true,
  });
  return Episode;
};
