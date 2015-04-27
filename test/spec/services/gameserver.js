'use strict';

describe('Service: gameServer', function () {

  // load the service's module
  beforeEach(module('movieBarcodeQuizApp'));

  // instantiate service
  var gameServer;
  beforeEach(inject(function (_gameServer_) {
    gameServer = _gameServer_;
  }));

  it('should do something', function () {
    expect(!!gameServer).toBe(true);
  });

});
