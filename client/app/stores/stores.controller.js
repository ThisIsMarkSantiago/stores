'use strict';

(function(){

class StoresComponent {
  constructor(API, Modal) {
    angular.extend( this, {
      API,
      Modal,
      loading: {},
      errors: {}
    });
  }

  $onInit() {
    this.loading.list = true;
    this.errors.list = undefined;
    this.API.get('/stores')
      .then(stores => this.stores = stores)
      .catch(() => this.errors.list = 'Something went wrong in fetching list of stores. Try to reload the page.')
      .finally(() => this.loading.list = false);
  }

  delete(store) {
    this.Modal.confirm.delete(() => {
      this.loading.delete = true;
      this.errors.delete = undefined;
      this.API.delete(`/stores/${store._id}`)
        .then(() => this.stores.splice(this.stores.indexOf(store), 1))
        .catch(() => this.errors.delete = 'Something went wrong in deleting the store. Try again.')
        .finally(() => this.loading.delete = false);
    })(store.name + ' store');
  }
}

angular.module('storesApp')
  .component('stores', {
    templateUrl: 'app/stores/stores.html',
    controller: StoresComponent
  });

})();
