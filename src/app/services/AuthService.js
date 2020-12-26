const jwt = require('jsonwebtoken');
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
