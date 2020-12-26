/* eslint-disable consistent-return */
const { check, validationResult } = require('express-validator');

exports.validateLanguage = [
  check('title')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('The language title can not be empty!')
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
