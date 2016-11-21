'use strict';

angular.module('storesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('map', {
        url: '/map',
        views: {
          'content@': {
            template: '<map-view></map-view>'
          }
        }
      });
  });
