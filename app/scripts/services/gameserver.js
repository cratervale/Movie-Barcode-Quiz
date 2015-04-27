'use strict';

/**
 * @ngdoc service
 * @name movieBarcodeQuizApp.gameServer
 * @description
 * # gameServer
 * Factory in the movieBarcodeQuizApp.
 */
angular.module('movieBarcodeQuizApp')
  .factory('gameServer', function (randomnessFunctions) {
    // Service logic
    // ...

    var Barcode = Parse.Object.extend("Barcode");





    // Public API here
    return {
      getNextRound: function () {
        var numbers = randomnessFunctions.getFourRandomNumbers();

        var query0 = new Parse.Query(Barcode);
        query0.equalTo("index", numbers[0]);

        var query1 = new Parse.Query(Barcode);
        query1.equalTo("index", numbers[1]);

        var query2 = new Parse.Query(Barcode);
        query2.equalTo("index", numbers[2]);

        var query3 = new Parse.Query(Barcode);
        query3.equalTo("index", numbers[3]);

        var mainQuery = new Parse.Query.or(query0, query1, query2, query3);

        return mainQuery.find();
      }
    };
  });
