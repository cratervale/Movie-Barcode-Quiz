'use strict';

/**
 * @ngdoc overview
 * @name movieBarcodeQuizApp
 * @description
 * # movieBarcodeQuizApp
 *
 * Main module of the application.
 */
angular
  .module('movieBarcodeQuizApp', [
    'ngAnimate',
    'parse-angular',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/quiz.html',
        controller: 'QuizCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
