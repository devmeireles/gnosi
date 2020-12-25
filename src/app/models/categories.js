const {
  Model,
} = require('sequelize');

const SequelizeSlugify = require('sequelize-slugify');

module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Categories.belongsToMany(models.Catalogue, {
        through: 'CatalogueCategory',
        as: 'catalogues',
        foreignKey: 'categoryId',
      });
    }
  }
  Categories.init({
    title: {
      type: DataTypes.STRING,
      unique: true,
    },
    slug: {
      type: DataTypes.TEXT,
      unique: true,
    },
    description: DataTypes.TEXT,
    status: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Categories',
    underscored: true,
  });

  SequelizeSlugify.slugifyModel(Categories, {
    source: ['title'],
    suffixSource: [],
    slugOptions: { lower: true },
    overwrite: false,
    column: 'slug',
    incrementalSeparator: '-',
    passTransaction: true,
  });
  return Categories;
};
