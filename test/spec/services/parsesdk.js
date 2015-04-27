'use strict';

describe('Service: parseSDK', function () {

  // load the service's module
  beforeEach(module('movieBarcodeQuizApp'));

  // instantiate service
  var parseSDK;
  beforeEach(inject(function (_parseSDK_) {
    parseSDK = _parseSDK_;
  }));

  it('should do something', function () {
    expect(!!parseSDK).toBe(true);
  });

});
