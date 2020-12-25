const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.User.hasMany(models.Catalogue, { foreignKey: 'ownerId' });
      models.User.hasMany(models.Catalogue, { foreignKey: 'ownerId' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    biography: DataTypes.TEXT,
    status: DataTypes.INTEGER,
    public: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER,
    avatar_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
  });
  return User;
};
