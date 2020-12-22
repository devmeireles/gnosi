const {
  Model,
} = require('sequelize');

const SequelizeSlugify = require('sequelize-slugify');

module.exports = (sequelize, DataTypes) => {
  class Languages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Languages.init({
    title: {
      type: DataTypes.STRING,
      unique: true,
    },
    slug: {
      type: DataTypes.TEXT,
      unique: true,
    },
    status: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: 'Languages',
  });

  SequelizeSlugify.slugifyModel(Languages, {
    source: ['title'],
    suffixSource: [],
    slugOptions: { lower: true },
    overwrite: false,
    column: 'slug',
    incrementalSeparator: '-',
    passTransaction: true,
  });
  return Languages;
};
