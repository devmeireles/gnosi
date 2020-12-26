/* eslint-disable consistent-return */
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
  check('season_id')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('The episode must belong to a season')
    .bail(),
  check('media_id')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('The episode must have a media')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });
    next();
  },
];
