const SeasonService = require('../services/SeasonService');

exports.create = async (req, res) => {
  try {
    const data = await SeasonService.create(req.body);

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

exports.read = async (req, res) => {
  try {
    const { id } = await req.params;

    const data = await SeasonService.read(id);

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

exports.update = async (req, res) => {
  try {
    const { id } = await req.params;

    await SeasonService.update(req.body, id);

    return res.status(200).json({
      success: true,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      data: e.message,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = await req.params;

    await SeasonService.delete(id);

    return res.status(200).json({
      success: true,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      data: e.message,
    });
  }
};
