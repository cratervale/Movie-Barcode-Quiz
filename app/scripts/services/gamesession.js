'use strict';

/**
 * @ngdoc service
 * @name movieBarcodeQuizApp.gameSession
 * @description
 * # gameSession
 * Service in the movieBarcodeQuizApp.
 */
angular.module('movieBarcodeQuizApp')
  .service('gameSession', function () {
    this.numberCorrect = 0;
    this.numberIncorrect = 0;
  });
