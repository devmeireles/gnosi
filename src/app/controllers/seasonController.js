const SeasonService = require('../services/SeasonService');

exports.create = async (req, res) => {
  try {
    const data = await SeasonService.create(req.body);

    return res.status(200).json(
      {
        success: true,
        data,
      },
    );
  } catch (e) {
    return res.status(400).json(
      {
        success: false,
        data: e.message,
      },
    );
  }
};
