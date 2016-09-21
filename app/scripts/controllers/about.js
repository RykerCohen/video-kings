'use strict';

/**
 * @ngdoc function
 * @name tamplateWebsiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tamplateWebsiteApp
 */
angular.module('tamplateWebsiteApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {

    $scope.awesomeThings = [ 'HTML5 Boilerplate', 'AngularJS', 'Karma' ];

  }]);
