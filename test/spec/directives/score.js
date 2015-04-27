'use strict';

describe('Directive: score', function () {

  // load the directive's module
  beforeEach(module('movieBarcodeQuizApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<score></score>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the score directive');
  }));
});
