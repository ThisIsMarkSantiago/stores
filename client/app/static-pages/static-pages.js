'use strict';

angular.module('storesApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('company', {
        url: '/company',
        views: {
          'content@': {
            templateUrl: 'app/static-pages/company.html'
          }
        }
      })
      .state('history', {
        url: '/history',
        views: {
          'content@': {
            templateUrl: 'app/static-pages/history.html'
          }
        }
      });
  });
