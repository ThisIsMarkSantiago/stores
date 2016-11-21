'use strict';

angular.module('storesApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      views: {
        'content@': {
          template: '<main></main>'
        }
      }
    });
  });
