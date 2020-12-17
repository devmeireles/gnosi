const RequestService = require('./RequestService');

exports.uploadFile = (req) => {
  try {
    console.log('req from service', req);
    return RequestService.post(req);
  } catch (err) {
    return err.message;
  }
};
