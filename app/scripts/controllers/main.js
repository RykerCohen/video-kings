'use strict';

/**
 * @ngdoc function
 * @name tamplateWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tamplateWebsiteApp
 */
angular.module('tamplateWebsiteApp')
  .controller('MainCtrl', ['$scope', function ($scope) {

    $scope.awesomeThings = [ 'HTML5 Boilerplate', 'AngularJS', 'Karma' ];
    
  }]);
