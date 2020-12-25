const { check, validationResult } = require('express-validator');

exports.validateCatalogue = [
  check('title')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('The catalogue title can not be empty!')
    .bail()
    .isLength({ min: 2 })
    .withMessage('Minimum 2 characters required!')
    .bail(),
  check('owner_id')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('The catalogue must belong to a user')
    .bail(),
  check('media_id')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('The catalogue must have a media')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });
    next();
  },
];

exports.validateCatalogueCategory = [
  check('categories')
    .not()
    .isEmpty()
    .withMessage('The category can not be empty!')
    .bail()
    .isLength({ min: 1 })
    .withMessage('Minimum 1 category is required')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });
    next();
  },
];

exports.validateCatalogueObjective = [
  check('title')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('The objective title can not be empty!')
    .bail()
    .isLength({ min: 2 })
    .withMessage('Minimum 2 characters required!')
    .bail(),
  check('description')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('The objective description can not be empty!')
    .bail()
    .isLength({ min: 2 })
    .withMessage('Minimum 2 characters required!')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });
    next();
  },
];
