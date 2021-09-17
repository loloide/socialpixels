// Initializes the `pixels` service on path `/pixels`
const { Pixels } = require('./pixels.class');
const hooks = require('./pixels.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/pixels', new Pixels(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('pixels');

  service.hooks(hooks);
};
