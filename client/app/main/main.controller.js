'use strict';

(function() {

  class MainController {

    constructor(API) {
      angular.extend(this, {
        API,
        loading: {},
        errors: {},
        loremipsum: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet nulla volutpat, consequat eros ut, pharetra augue. Sed feugiat massa eget felis scelerisque accumsan. Suspendisse nisi mauris, placerat ut convallis non, accumsan in eros. Sed vitae orci tristique, eleifend quam et, vestibulum ligula. Cras turpis mi, ullamcorper ut venenatis luctus, auctor ut sapien. Suspendisse in nisl dui. Nam pretium tristique ipsum vitae pretium. Sed et condimentum nisi, sed sodales enim. Vestibulum et egestas ligula. Vivamus sollicitudin arcu sed lorem egestas porta. Donec egestas, orci sit amet consectetur hendrerit, turpis leo ultricies lorem, sed imperdiet libero mi sed ligula. Donec ac consectetur orci. Proin tellus eros, sagittis tincidunt vestibulum non, ultricies vel tellus. Sed blandit at ligula et ultrices.',
          'Ligula etiam purus libero vivamus urna sapien integer lectus, porttitor curabitur lorem ad risus iaculis enim posuere eget, habitant fusce tempus arcu convallis tellus tincidunt nisl conubia non fusce potenti urna platea felis feugiat torquent libero himenaeos, sollicitudin curae augue leo velit suscipit quam sodales aliquet nulla dictumst viverra iaculis semper iaculis quam porta sagittis erat iaculis, libero cubilia euismod risus placerat interdum metus condimentum, tempus litora senectus urna integer ut aenean egestas class bibendum dapibus per quam maecenas cubilia netus nisl conubia sem neque adipiscing.',
          'Conubia cursus nam suscipit semper lorem aliquam amet quisque fames posuere, eleifend curabitur torquent hendrerit erat lectus facilisis hac torquent porta semper, feugiat metus nisl nullam fames adipiscing aliquam ullamcorper fames.',
          'Magna vitae scelerisque quisque donec amet lobortis diam sagittis primis, porttitor varius aenean ad dui vehicula est facilisis bibendum, turpis bibendum justo dapibus vivamus felis mauris dolor.',
          'Tempus venenatis eget arcu sociosqu aptent inceptos, elit rutrum sem malesuada lacus habitant, senectus hendrerit maecenas a est taciti proin habitasse potenti tempus ultricies donec porttitor sagittis etiam lectus enim donec luctus.'
        ]
      });
    }

    $onInit() {
      this.getFeaturesList();
    }

    generateArray(length) {
      return new Array(length);
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
