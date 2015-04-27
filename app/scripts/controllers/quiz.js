'use strict';

/**
 * @ngdoc function
 * @name movieBarcodeQuizApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the movieBarcodeQuizApp
 */
angular.module('movieBarcodeQuizApp')
  .controller('QuizCtrl', function ($scope, $rootScope, gameServer, randomnessFunctions) {





    $scope.checkIfCorrect = function(guess){
      if (guess.id === $rootScope.correct.id){
        alert("Correct!");
      } else {
        alert("Nope, it was " + $scope.correct.attributes.title);
      }
    };

    $scope.startRound = function(){
      gameServer.getNextRound()
      .then(function(movies){
        $scope.movies = movies;
        $rootScope.correct = randomnessFunctions.electCorrectAnswer($scope.movies);
      })
      .fail(function(err){
        console.log(err);
      });
    }

    $scope.startRound();




  });
