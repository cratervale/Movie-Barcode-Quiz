'use strict';

describe('Service: gameSession', function () {

  // load the service's module
  beforeEach(module('movieBarcodeQuizApp'));

  // instantiate service
  var gameSession;
  beforeEach(inject(function (_gameSession_) {
    gameSession = _gameSession_;
  }));

  it('should do something', function () {
    expect(!!gameSession).toBe(true);
  });

});
