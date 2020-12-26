/* eslint-disable consistent-return */
const { check, validationResult } = require('express-validator');

exports.validateUser = [
  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('The name can not be empty!')
    .bail()
    .isLength({ min: 2 })
    .withMessage('Minimum 2 characters required!')
    .bail(),
  check('username')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('The username can not be empty!')
    .bail()
    .isLength({ min: 5 })
    .withMessage('Minimum 5 characters required!')
    .bail(),
  check('email')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('The email can not be empty!')
    .bail()
    .isLength({ min: 5 })
    .withMessage('Minimum 5 characters required!')
    .isEmail()
    .withMessage('Invalid email')
    .bail(),
  check('password')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('The password can not be empty!')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });
    next();
  },
];