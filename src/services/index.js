const pixels = require('./pixels/pixels.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(pixels);
};
