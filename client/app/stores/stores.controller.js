'use strict';

(function(){

class StoresComponent {
  constructor($http) {
    angular.merge( this, {
      $http,
      loading: {}
    });
  }

  $onInit() {
    this.loading.stores = true;
    this.$http.get('/api/stores')
      .then(response => {
        this.stores = response.data;
      })
      .finally(() => this.loading.stores = false);
  }
}

angular.module('storesApp')
  .component('stores', {
    templateUrl: 'app/stores/stores.html',
    controller: StoresComponent
  });

})();
