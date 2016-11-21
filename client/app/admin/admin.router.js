'use strict';

angular.module('storesApp.admin')
  .config(function($stateProvider) {
    $stateProvider.state('admin', {
      url: '/admin',
      authenticate: 'admin',
      views: {
        'content@': {
          templateUrl: 'app/admin/admin.html',
          controller: 'AdminController',
          controllerAs: 'admin'
        }
      }
    });
  });
