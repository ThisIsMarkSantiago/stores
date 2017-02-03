/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Our Company',
      info: 'Vision, Mission, Management & Staffs',
      link: 'company',
      order: 1
    },{
      name: 'History',
      info: 'Coffee Slices history',
      link: 'history',
      order: 2
    },{
      name: 'Branches',
      info: 'View map to see nearby stores',
      link: 'map',
      order: 3
    },{
      name: 'Menu & Pricing',
      info: 'See our menu, specialties',
      link: 'menu',
      order: 4
    },{
      name: 'Gallery',
      info: 'Photos & Videos',
      link: 'gallery',
      order: 5
    },{
      name: 'Contact Us',
      info: 'Coffee Slices contact information for your questions',
      link: 'main',
      order: 6
    },{
      name: 'Feedback',
      info: 'Send us email suggestions, feedback',
      link: 'main',
      order: 7
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
