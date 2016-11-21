'use strict';

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

exports = module.exports = {
  // List of user roles
  userRoles: ['guest', 'user', 'admin'],

  // API url
  apiURL: env === 'development' ? 'http://localhost:9000/api' : 'http://localhost:9000/api'
};
