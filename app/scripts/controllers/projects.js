'use strict';

/**
 * @ngdoc function
 * @name videoKingsApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the videoKingsApp
 */
angular.module('videoKingsApp')
  .controller('ProjectsCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.projectId = $routeParams.id;
  
  }]);
