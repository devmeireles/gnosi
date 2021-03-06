const LanguageService = require('../services/LanguageService');

exports.index = async (req, res) => {
  const page = req.body.page ? parseInt(req.body.page, 10) : 1;
  const limit = req.body.limit ? parseInt(req.body.limit, 10) : 10;
  const skip = page * limit - limit;

  try {
    const data = await LanguageService.enumerate({}, skip, limit);

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

exports.create = async (req, res) => {
  try {
    const data = await LanguageService.create(req.body);

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

    const data = await LanguageService.read(id);

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

    await LanguageService.update(req.body, id);

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

    await LanguageService.delete(id);

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
