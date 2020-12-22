const { check, validationResult } = require('express-validator');

exports.validateSeason = [
  check('title')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('The season title can not be empty!')
    .bail()
    .isLength({ min: 2 })
    .withMessage('Minimum 2 characters required!')
    .bail(),
  check('CatalogueId')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('The season must belong to a catalogue')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });
    next();
  },
];
