'use strict';

/**
 * @ngdoc overview
 * @name videoKingsApp Routes
 * @description
 * # videoKingsApp Routes
 *
 * Route module of the application.
 */
angular.module('Routes', [
  'ngRoute'
  ])

  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl'
      })
      .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'WorkCtrl'
      })
      .when('/projects/:id', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/music', {
        templateUrl: 'views/music.html',
        controller: 'WorkCtrl'
      })
      .when('/commercial', {
        templateUrl: 'views/commercial.html',
        controller: 'WorkCtrl'
      })
      .when('/interviews', {
        templateUrl: 'views/interviews.html',
        controller: 'WorkCtrl'
      })
      .when('/features', {
        templateUrl: 'views/features.html',
        controller: 'WorkCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
