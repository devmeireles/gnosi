const db = require('../models/index');

exports.enumerate = async (query, skip, limit) => {
  try {
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

exports.create = async (data) => {
  try {
    return await db.Catalogue.create(data);
  } catch (e) {
    throw Error(e);
  }
};

exports.read = async (id) => {
  try {
    const data = await db.Catalogue.findAll({
      where: { id },
    });

    if (data.length < 1) throw Error('Item not found');

    return data;
  } catch (e) {
    throw Error(e);
  }
};

exports.update = async (data, id) => {
  try {
    return await db.Catalogue.update(data, {
      where: {
        id,
      },
    });
  } catch (e) {
    throw Error(e);
  }
};

exports.delete = async (id) => {
  try {
    const data = await db.Catalogue.destroy({
      where: {
        id,
      },
    });

    if (data === 0) throw Error('Item not found');

    return true;
  } catch (e) {
    throw Error(e);
  }
};
