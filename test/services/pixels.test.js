const assert = require('assert');
const app = require('../../src/app');

describe('\'pixels\' service', () => {
  it('registered the service', () => {
    const service = app.service('pixels');

    assert.ok(service, 'Registered the service');
  });
});
