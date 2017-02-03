'use strict';

(function(){

class MapComponent {
  constructor(API, NgMap) {
    angular.extend(this, {
      API,
      NgMap,
      travelMode: 'DRIVING',
      loading: {},
      errors: {}
    });
    this.selectStore = this.selectStore.bind(this);
  }

  $onInit() {
    this.loading.stores = true;
    this.errors.stores = undefined;
    this.API.get(`/stores`)
      .then(stores => {
        this.stores = stores;
        this.markers = stores.map(store => {
          return store.location.coordinates.reverse();
        });
        this.initializeMap();
      })
      .catch(() => this.errors.stores = 'Something went wrong in fetching list of stores. Try to reload the page.')
      .finally(() => this.loading.stores = false);
  }

  initializeMap() {
    const vm = this;
    if (typeof google === 'object' && typeof google.maps === 'object') {
      vm.NgMap.getMap('global-map').then(map => vm.map = map);
      vm.onSearch = function() {
        vm.getDirection(vm.selectedStore, this.getPlace().geometry && [
          this.getPlace().geometry.location.lat(),
          this.getPlace().geometry.location.lng()
        ]);
      };
    } else {
      vm.errors.map = 'Cannot load map.';
    }
  }

  selectStore(e, store) {
    this.selectedStore = store;
    this.search = undefined;
    this.map.showInfoWindow('info-box', store._id);
  }

  getDirection(store, start) {
    this.start = start || [
      this.map.markers.you.position.lat(),
      this.map.markers.you.position.lng()
    ];
    this.destination = store.location.coordinates;
    this.map.hideInfoWindow('info-box');
  }
}

angular.module('storesApp')
  .component('mapView', {
    templateUrl: 'app/map/map.html',
    controller: MapComponent,
    controllerAs: 'vm'
  });

})();
