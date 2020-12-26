const RequestService = require('./RequestService');

exports.uploadFile = (req) => {
  try {
    return RequestService.post(req);
  } catch (err) {
    return err.message;
  }
};
