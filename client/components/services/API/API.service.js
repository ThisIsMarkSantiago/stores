'use strict';

function APIService(appConfig, $http) {

  this.get = (api, params) => {
    return $http({
      method: 'GET',
      url: appConfig.apiURL + api,
      params: params ? params : {}
    })
    .then(result => result.data);
  };

  this.post = (api, data, params) => {
    return $http({
      method: 'POST',
      url: appConfig.apiURL + api,
      data: data,
      params: params ? params : {}
    })
    .then(result => result.data);
  };

  this.put = (api, data, params) => {
    return $http({
      method: 'PUT',
      url: appConfig.apiURL + api,
      data: data,
      params: params ? params : {}
    })
    .then(result => result.data);
  };

  this.delete = (api, params) => {
    return $http({
      method: 'DELETE',
      url: appConfig.apiURL + api,
      params: params ? params : {}
    })
    .then(result => result.data);
  };

}

angular.module('storesApp')
  .service('API', APIService);
