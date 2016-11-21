'use strict';

(function(){

class StoresDetailsComponent {
  constructor(API, $state) {
    angular.extend( this, {
      API,
      $state,
      loading: {},
      errors: {}
    });
  }

  $onInit() {
    this.loading.details = true;
    this.errors.details = undefined;
    this.API.get(`/stores/${this.$state.params.id}`)
      .then(store => {
        store.location = store.location.coordinates.reverse();
        this.store = store;
      })
      .catch(() => this.errors.details = 'Something went wrong in fetching store details. Try to reload the page.')
      .finally(() => this.loading.details = false);
  }
}

angular.module('storesApp')
  .component('storesDetails', {
    templateUrl: 'app/stores/stores-details.html',
    controller: StoresDetailsComponent
  });

})();
