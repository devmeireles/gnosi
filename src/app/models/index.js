const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/database')[env];

dotenv.config();

const db = {};

let sequelize;

if (env === 'production') {
  sequelize = new Sequelize(process.env.PROD_DB_HOST, {
    dialect: process.env.DIALECT,
    protocol: process.env.PROTOCOL,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    ssl: true,
  });
} else if (env === 'development') {
  sequelize = new Sequelize(process.env.DEV_DB_HOST, {
    dialect: process.env.DIALECT,
    protocol: process.env.PROTOCOL,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    ssl: true,
  });
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Catalogue.belongsToMany(db.Categories, {
  through: 'CatalogueCategory',
  as: 'categories',
  foreignKey: 'catalogueId',
});

db.Categories.belongsToMany(db.Catalogue, {
  through: 'CatalogueCategory',
  as: 'catalogues',
  foreignKey: 'categoryId',
});

db.Catalogue.belongsToMany(db.Languages, {
  through: 'CatalogueLanguages',
  as: 'languages',
  foreignKey: 'catalogueId',
});

db.Languages.belongsToMany(db.Catalogue, {
  through: 'CatalogueLanguages',
  as: 'catalogues',
  foreignKey: 'languageId',
});

db.Episode.belongsTo(db.Season);
db.Season.hasMany(db.Episode, { as: 'episodes' });
db.Season.belongsTo(db.Catalogue, { foreignKey: 'CatalogueId', as: 'catalogues' });
db.Catalogue.hasMany(db.Season, { as: 'seasons' });
db.Catalogue.belongsTo(db.User, { as: 'owner' });
db.User.hasMany(db.Catalogue, { foreignKey: 'ownerId' });

module.exports = db;
