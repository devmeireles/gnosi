const db = require('../models/index');

exports.create = async (data) => {
  try {
    return await db.Season.create(data);
  } catch (e) {
    throw Error(e);
  }
};
