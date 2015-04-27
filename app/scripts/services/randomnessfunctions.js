'use strict';

/**
 * @ngdoc service
 * @name movieBarcodeQuizApp.randomnessFunctions
 * @description
 * # randomnessFunctions
 * Factory in the movieBarcodeQuizApp.
 */
angular.module('movieBarcodeQuizApp')
  .factory('randomnessFunctions', function () {
    // Service logic
    // ...

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    var getRandomInt = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return {
      getFourRandomNumbers : function(){
        var arr = [];
        // get four unique random numbers
        while(arr.length < 4){
          var rand = getRandomInt(0, 1259);
          if(arr.indexOf(rand) === -1) arr.push(rand);
        }
        return arr;
      },
      electCorrectAnswer : function(options){
          return options[getRandomInt(0, options.length-1)];
      }
    };
  });
