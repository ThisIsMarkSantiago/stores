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
      })
      .state('stores.create', {
        url: '/new',
        parent: 'stores',
        authenticate: 'admin',
        views: {
          'content@': {
            template: '<stores-form></stores-form>'
          }
        }
      })
      .state('stores.edit', {
        url: '/:id/edit',
        parent: 'stores',
        authenticate: 'admin',
        views: {
          'content@': {
            template: '<stores-form></stores-form>'
          }
        }
      });
  });
