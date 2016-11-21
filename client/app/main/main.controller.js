'use strict';

(function() {

  class MainController {

    constructor(API) {
      angular.extend(this, {
        API,
        loading: {},
        errors: {}
      });
    }

    $onInit() {
      this.getFeaturesList();
    }

    getFeaturesList() {
      this.loading.list = true;
      this.errors.list = undefined;
      this.API.get('/things')
        .then(things => this.awesomeThings = things)
        .catch(() => this.errors.list = 'Something went wrong in fetching features list.')
        .finally(() => this.loading.list = false);
    }

  }

  angular.module('storesApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
