const jwt = require('jsonwebtoken');
const db = require('../models/index');
const authConfig = require('../config/auth');

exports.generateToken = async (params = {}) => {
  try {
    return jwt.sign(params, authConfig.secret, {
      expiresIn: 3600,
    });
  } catch (e) {
    throw Error(e);
  }
};

exports.createLoginLog = async (id) => {
  try {
    return await db.UserLogin.create({
      user_id: id,
    });
  } catch (e) {
    throw Error(e);
  }
};
