const UserService = require('../services/UserService');

exports.create = async (req, res) => {
  try {
    const data = await UserService.create(req.body);

    data.password = undefined;

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      data: e.message,
    });
  }
};
