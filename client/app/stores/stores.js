'use strict';

angular.module('storesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stores', {
        url: '/stores',
        authenticate: 'admin',
        views: {
          'content@': {
            template: '<stores></stores>'
          }
        }
      });
  });
