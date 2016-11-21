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
      .state('stores.details', {
        url: '/:id',
        parent: 'stores',
        authenticate: 'admin',
        views: {
          'content@': {
            template: '<stores-details></stores-details>'
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
