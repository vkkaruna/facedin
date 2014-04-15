'use strict';

var karunahereApp = angular
  .module('karunahereApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/Facebook2.html',
        controller: 'FacebookController'
      })
      .when('/facebook', {
        templateUrl: 'views/Task411.html',
        controller: 'MainCtrl'
      })
	  .when('/linkedin', {
        templateUrl: 'views/LinkedIn.html',
        controller: 'LinkedinController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });