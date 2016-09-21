'use strict';

/**
 * @ngdoc overview
 * @name tamplateWebsiteApp
 * @description
 * # tamplateWebsiteApp
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
  }]);
