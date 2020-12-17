const CatalogueService = require('../services/CatalogueService');

exports.index = async (req, res) => {
  // #swagger.tags = ['Catalogue']
  const page = req.body.page ? parseInt(req.body.page, 10) : 1;
  const limit = req.body.limit ? parseInt(req.body.limit, 10) : 10;
  const skip = (page * limit) - limit;

  try {
    const data = await CatalogueService.getCatalogues({}, skip, limit);

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
