'use strict';

describe('Service: randomnessFunctions', function () {

  // load the service's module
  beforeEach(module('movieBarcodeQuizApp'));

  // instantiate service
  var randomnessFunctions;
  beforeEach(inject(function (_randomnessFunctions_) {
    randomnessFunctions = _randomnessFunctions_;
  }));

  it('should do something', function () {
    expect(!!randomnessFunctions).toBe(true);
  });

});
