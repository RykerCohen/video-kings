'use strict';

/**
 * @ngdoc overview
 * @name videoKingsApp
 * @description
 * # videoKingsApp
 *
 * Main module of the application.
 */
angular
  .module('videoKingsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'Routes',
    'ngSanitize',
    'ngTouch'
  ])

  .config(['$compileProvider', '$httpProvider', function ($compileProvider, $httpProvider) {
    $compileProvider.debugInfoEnabled(false);
    $httpProvider.useApplyAsync(true);
  }])

  .run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function () {
      $location.path('#/');
    });
    
    $rootScope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };
  }]);
