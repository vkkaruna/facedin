'use strict';

angular
  .module('karunahereApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/Facebook.html',
        controller: 'MainCtrl'
      })
      .when('/facebook', {
        templateUrl: 'views/Task411.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });