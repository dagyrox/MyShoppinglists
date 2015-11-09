/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var Shoppinglist = require('../api/shoppinglist/shoppinglist.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.',
    test : 'this is just a test'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

Shoppinglist.find({}).remove(function() {
  Shoppinglist.create({
    name : 'Bills CC Budget',
    info : 'Only things that get paid for using the bills creditcard go on this list.  Gas, Groceries, Emergencies, etc.',
    active: true,
    startdate: '2015-11-05',
    stopdate: '2015-11-12',
    owner: "563cc0c1659a1954145dde43",
    budget: 200.00,
    shared: ["563cc0c1659a1954145dde42"],
    items: []
  },
  {
    name : 'Bills CC Budget',
    info : 'Only things that get paid for using the bills creditcard go on this list.  Gas, Groceries, Emergencies, etc.',
    active: true,
    startdate: '2015-10-31',
    stopdate: '2015-11-06',
    owner: "563cc0c1659a1954145dde43",
    budget: 200.00,
    shared: ["563cc0c1659a1954145dde42"],
    items: []
  },
  {
    name : 'Bills CC Budget',
    info : 'Only things that get paid for using the bills creditcard go on this list.  Gas, Groceries, Emergencies, etc.',
    active: true,
    startdate: '2015-10-23',
    stopdate: '2015-10-30',
    owner: "563cc0c1659a1954145dde43",
    budget: 200.00,
    shared: ["563cc0c1659a1954145dde42"],
    items: 
      [
        {
          name:"Water-24pk",
          description:"24 pack of water",
          store : "563bc09c019ab76c30a11925",
          cost : 10.00,
          taxflag : false
        },
        {
          Name: "Water-12pk",
          Description : "12-Pack of bottled water",
          Store : "563bc0ff019ab76c30a11927",
          Cost : 5.75,
          TaxFlag : false
        },
        {
          Name : "Toilet Paper",
          Description : "Charmin 36Rolls Aloe",
          Store : "563bc0c8019ab76c30a11926",
          Cost : 13.7500000000000000,
          TaxFlag : true
        }
      ]
  },
  {
    name : 'Bills CC Budget',
    info : 'Only things that get paid for using the bills creditcard go on this list.  Gas, Groceries, Emergencies, etc.',
    active: true,
    startdate: '2015-10-15',
    stopdate: '2015-10-22',
    owner: "563cc0c1659a1954145dde43",
    budget: 200.00,
    shared: ["563cc0c1659a1954145dde42"],
    items: []
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});