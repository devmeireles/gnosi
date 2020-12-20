const db = require('../models/index');

exports.create = async (data) => {
  try {
    return await db.User.create(data);
  } catch (e) {
    throw Error(e);
  }
};
