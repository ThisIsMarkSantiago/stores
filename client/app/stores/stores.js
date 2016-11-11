'use strict';

angular.module('storesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stores', {
        url: '/stores',
        authenticate: 'admin',
        template: '<stores></stores>'
      });
  });
