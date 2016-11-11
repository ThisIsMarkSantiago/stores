'use strict';

angular.module('storesApp.auth', ['storesApp.constants', 'storesApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
