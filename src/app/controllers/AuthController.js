const bcrypt = require('bcryptjs');
const UserService = require('../services/UserService');
const AuthService = require('../services/AuthService');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserService.findByUsername(username);

    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(400).send({ error: 'Invalid login data' });

    user.password = undefined;

    const token = await AuthService.generateToken({ id: user.id });

    return res.send({
      user,
      token,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      data: e.message,
    });
  }
};
