'use strict';

/**
 * @ngdoc function
 * @name videoKingsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the videoKingsApp
 */
angular.module('videoKingsApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {

    $scope.awesomeThings = [ 'HTML5 Boilerplate', 'AngularJS', 'Karma' ];

  }]);
