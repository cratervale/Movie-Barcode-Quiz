'use strict';

/**
 * @ngdoc directive
 * @name movieBarcodeQuizApp.directive:score
 * @description
 * # score
 */
angular.module('movieBarcodeQuizApp')
  .directive('score', function (gameSession) {
    return {
      templateUrl: 'views/score.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        scope.numberCorrect = gameSession.numberCorrect;
        scope.numberAttempted = gameSession.numberAttempted;


        //
        scope.$on('report-score', function(event, args){
          scope.numberAttempted = gameSession.numberAttempted;
          scope.numberCorrect = gameSession.numberCorrect;
        });


      }
    };
  });
