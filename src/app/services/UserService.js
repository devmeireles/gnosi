const db = require('../models/index');

exports.create = async (data) => {
  try {
    return await db.User.create(data);
  } catch (e) {
    throw Error(e);
  }
};

exports.read = async (id) => {
  try {
    const data = await db.User.findOne({
      where: { id },
    });

    if (!data.length < 1) throw Error('Item not found');

    return data;
  } catch (e) {
    throw Error(e);
  }
};

exports.findByUsername = async (username) => {
  try {
    const data = await db.User.findOne({
      where: { username },
    });

    if (!data) throw Error('Item not found');

    return data;
  } catch (e) {
    throw Error(e);
  }
}