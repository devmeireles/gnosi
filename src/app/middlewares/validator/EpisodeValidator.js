const { check, validationResult } = require('express-validator');

exports.validateEpisode = [
  check('title')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('The episode title can not be empty!')
    .bail()
    .isLength({ min: 2 })
    .withMessage('Minimum 2 characters required!')
    .bail(),
  check('SeasonId')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('The episode must belong to a season')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });
    next();
  },
];
