'use strict';

describe('Component: StoresComponent', function () {

  // load the controller's module
  beforeEach(module('storesApp'));

  var StoresComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    StoresComponent = $componentController('stores', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
