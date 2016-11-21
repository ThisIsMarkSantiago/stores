'use strict';

(function(){

class StoresFormComponent {
  constructor(NgMap, API, $state) {
    angular.extend(this, {
      NgMap,
      API,
      $state,
      store: {},
      loading: {},
      errors: {}
    });
  }

  $onInit() {
    this.initializeMap();
    if (this.$state.params.id) {
      return this.getStoreDetails();
    }
  }

  getStoreDetails() {
    this.loading.details = true;
    this.errors.details = undefined;
    return this.API.get(`/stores/${this.$state.params.id}`)
      .then(store => {
        store.location = [
          store.location.coordinates[1],
          store.location.coordinates[0]
        ];
        this.store = store;
      })
      .catch(() => this.errors.details = 'Something went wrong in fetching store details. Try to reload the page.')
      .finally(() => this.loading.details = false);
  }

  initializeMap() {
    const vm = this;
    // GET MAP
    vm.NgMap.getMap('location-picker')
      .then(map => {
        vm.map = map;
        if (!this.$state.params.id) {
          vm.setLocation();
        }
      });

    // SAVE MARKER LOCATION IN STORE MODEL
    vm.setLocation = () => {
      const marker = vm.map && vm.map.markers[0];
      if (marker) {
        vm.store.location = [
          marker.position.lat(),
          marker.position.lng()
        ];
      }
    };

    vm.onSearch = function() {
      vm.map.setCenter(this.getPlace().geometry.location);
      if (vm.map.markers[0]) {
        vm.store.location = [
          this.getPlace().geometry.location.lat(),
          this.getPlace().geometry.location.lng()
        ];
        vm.store.address = [this.getPlace().name, this.getPlace().formatted_address].join(', ');
      }
    };
  }

  submit(form) {
    if (form.$valid) {
      this.loading.submit = false;
      this.errors.submit = undefined;
      if (this.$state.params.id) {
        this.API.put(`/stores/${ this.$state.params.id }`, angular.extend(
          {}, this.store, {
            location: [
              this.store.location[1],
              this.store.location[0]
            ]
          }
        )).then(() => this.$state.go('stores'))
          .catch(err => this.errors.submit = err.data.errmsg || err.data.message || 'Unable to update store due to an unknown error!')
          .finally(() => this.loading.submit = false);
      } else {
        this.API.post('/stores', angular.extend(
          {}, this.store, {
            location: [
              this.store.location[1],
              this.store.location[0]
            ]
          }
        )).then(() => this.$state.go('stores'))
          .catch(err => this.errors.submit = err.data.errmsg || err.data.message || 'Unable to create store due to an unknown error!')
          .finally(() => this.loading.submit = false);
      }
    }
  }
}

angular.module('storesApp')
  .component('storesForm', {
    templateUrl: 'app/stores/stores-form.html',
    controller: StoresFormComponent
  });

})();
