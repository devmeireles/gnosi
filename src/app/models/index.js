const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/database.json`)[env];
const db = {};

let sequelize;

if (process.env.NODE_ENV === 'development') {
  if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
  } else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
  }
} else {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    port: 5432,
    host: `https://${process.env.SWAGGER_URL}`,
    logging: false,
  });
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

db.Episode.belongsTo(db.Season);
db.Season.hasMany(db.Episode, { as: 'episodes' });
db.Season.belongsTo(db.Catalogue, { foreignKey: 'CatalogueId', as: 'catalogues' });
db.Catalogue.hasMany(db.Season, { as: 'seasons' });
db.Catalogue.belongsTo(db.User, { as: 'owner' });
db.User.hasMany(db.Catalogue, { foreignKey: 'ownerId' });

module.exports = db;
