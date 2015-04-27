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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/quiz', {
        templateUrl: 'views/quiz.html',
        controller: 'QuizCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
