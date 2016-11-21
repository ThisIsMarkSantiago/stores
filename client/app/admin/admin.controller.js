'use strict';

(function() {

  class AdminController {

    constructor(User) {
      angular.extend(this, {
        User,
        loading: {},
        errors: {}
      });

      this.getUsersList();
    }

    getUsersList() {
      this.loading.list = true;
      this.errors.list = undefined;
      this.users = this.User.query();

      // Fallback when fetchingfailed
      this.users.$promise
        .catch(() => this.errors.list = 'Something went wrong in fetching users list.')
        .finally(() => this.loading.list = false);
    }

    delete(user) {
      this.loading.delete = true;
      this.errors.delete = undefined;
      this.User.delete({ id: user._id }).$promise
        .then(() => this.users.splice(this.users.indexOf(user), 1))
        .catch(() => this.errors.delete = 'Unable to delete user.')
        .finally(() => this.loading.delete = false);
    }
  }

  angular.module('storesApp.admin')
    .controller('AdminController', AdminController);
})();
