const CatalogueService = require('../services/CatalogueService');

exports.index = async (req, res) => {
  const page = req.body.page ? parseInt(req.body.page, 10) : 1;
  const limit = req.body.limit ? parseInt(req.body.limit, 10) : 10;
  const skip = (page * limit) - limit;

  try {
    const data = await CatalogueService.enumerate({}, skip, limit);

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

exports.create = async (req, res) => {
  try {
    const data = await CatalogueService.create(req.body);

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

exports.read = async (req, res) => {
  try {
    const { id } = await req.params;

    const data = await CatalogueService.read(id);

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

exports.update = async (req, res) => {
  try {
    const { id } = await req.params;

    await CatalogueService.update(req.body, id);

    return res.status(200).json(
      {
        success: true,
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

exports.delete = async (req, res) => {
  try {
    const { id } = await req.params;

    await CatalogueService.delete(id);

    return res.status(200).json(
      {
        success: true,
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

exports.addLanguage = async (req, res) => {
  try {
    const catalogueId = req.params.id;
    const { languages } = req.body;

    const data = await CatalogueService.addLanguage(catalogueId, languages);

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

exports.deleteLanguage = async (req, res) => {
  try {
    const { id } = await req.params;

    await CatalogueService.deleteLanguage(id);

    return res.status(200).json(
      {
        success: true,
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

exports.addCategory = async (req, res) => {
  try {
    const catalogueId = req.params.id;
    const { categories } = req.body;

    const data = await CatalogueService.addCategory(catalogueId, categories);

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

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = await req.params;

    await CatalogueService.deleteCategory(id);

    return res.status(200).json(
      {
        success: true,
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

exports.addObjective = async (req, res) => {
  try {
    const catalogueId = req.params.id;
    const { body } = req;

    const data = await CatalogueService.addObjective(catalogueId, body);

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

exports.deleteObjective = async (req, res) => {
  try {
    const { id } = await req.params;

    await CatalogueService.deleteObjective(id);

    return res.status(200).json(
      {
        success: true,
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
