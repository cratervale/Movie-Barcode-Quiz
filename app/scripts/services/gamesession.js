'use strict';

/**
 * @ngdoc service
 * @name movieBarcodeQuizApp.gameSession
 * @description
 * # gameSession
 * Service in the movieBarcodeQuizApp.
 */
angular.module('movieBarcodeQuizApp')
  .service('gameSession', function ($rootScope) {

    this.numberCorrect = 0;
    this.numberAttempted = 0;
    this.reportScore = function(wasCorrect){
      this.numberAttempted ++;
      if(wasCorrect) this.numberCorrect ++;
      $rootScope.$broadcast('report-score');

    };
  });
