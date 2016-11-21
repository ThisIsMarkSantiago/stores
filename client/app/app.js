'use strict';

angular.module('storesApp', [
    'storesApp.auth',
    'storesApp.admin',
    'storesApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'validation.match',
    'ngMap'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
