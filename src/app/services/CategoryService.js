const db = require('../models');

exports.enumerate = async (query, skip, limit) => {
  try {
    return await db.Categories.findAll();
  } catch (e) {
    throw Error(e);
  }
};

exports.create = async (data) => {
  try {
    return await db.Categories.create(data);
  } catch (e) {
    throw Error(e);
  }
};

exports.read = async (id) => {
  try {
    const data = await db.Categories.findAll({
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
    return await db.Categories.update(data, {
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
    const data = await db.Categories.destroy({
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
