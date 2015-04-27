'use strict';

/**
 * @ngdoc service
 * @name movieBarcodeQuizApp.parseSDK
 * @description
 * # parseSDK
 * Factory in the movieBarcodeQuizApp.
 */
angular.module('movieBarcodeQuizApp')
  .factory('parseSDK', function () {

    // pro-tip: swap these keys out for PROD keys automatically on deploy using grunt-replace
    //Parse.initialize("jo93rMIrVxwXppPVazfWml5qa1t1VlYCIM1vkZra", "zH48QsmvzzKh9FqdI0yFLeCZPmL9SyFMyA94ZmAk");


    // Public API here
    return Parse;
  });
