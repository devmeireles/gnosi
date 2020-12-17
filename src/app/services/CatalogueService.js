// const Catalogue = require('../models/Catalogue');

const db = require('../models/index');
// const Catalogue = require('../models/catalogue');

exports.getCatalogues = async (query, skip, limit) => {
  try {
    // return await { query, skip, limit };

    return await db.Catalogue.findAll(
      {
        attributes: ['id', 'title', 'description'],
        include: [
          {
            model: db.Season,
            as: 'seasons',
            attributes: ['id', 'title', 'description'],
            include: [
              {
                model: db.Episode,
                as: 'episodes',
                attributes: ['id', 'title'],
              },
            ],
          },
          {
            model: db.User,
            attributes: ['id', 'name', 'username', 'typeId'],
            as: 'owner',
          },
        ],
      },
    );
  } catch (e) {
    throw Error(e);
  }
};
