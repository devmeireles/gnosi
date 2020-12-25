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
            attributes: ['id', 'name', 'username', 'type_id'],
            as: 'owner',
          },
          {
            model: db.Languages,
            as: 'languages',
            through: { attributes: [] },
            attributes: ['id', 'title', 'slug'],
          },
          {
            model: db.Categories,
            as: 'categories',
            through: { attributes: [] },
            attributes: ['id', 'title', 'slug'],
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

exports.addLanguage = async (catalogueId, languages) => {
  try {
    languages.map((language) => db.CatalogueLanguages.create({
      catalogue_id: catalogueId,
      language_id: language,
    }));
  } catch (e) {
    throw Error(e);
  }
};

exports.deleteLanguage = async (id) => {
  try {
    const data = await db.CatalogueLanguages.destroy({
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

exports.addCategory = async (catalogueId, categories) => {
  try {
    categories.map((category) => {
      db.CatalogueCategory.create({
        catalogue_id: catalogueId,
        category_id: category,
      });
    });
  } catch (e) {
    throw Error(e);
  }
};

exports.deleteCategory = async (id) => {
  try {
    const data = await db.CatalogueCategory.destroy({
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
