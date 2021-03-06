/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

// 'use strict';

// var Thing = require('../api/thing/thing.model');
// var Shoppinglist = require('../api/shoppinglist/shoppinglist.model');
// var User = require('../api/user/user.model');
// var Store = require('../api/store/store.model');
// var Item = require('../api/item/item.model');

// Item.find({}).remove(function(){
//   Item.create(
//     {
//       name:"Water-24pk",
//       description:"24 pack of water",
//       store : '56eb750debdfa1e8298c25ca',
//       cost : 10.00,
//       taxflag : false,
//       active:true
//     },
//     {
//       name: "Water-12pk",
//       description : "12-Pack of bottled water",
//       store : '56eb750debdfa1e8298c25cb',
//       cost : 5.75,
//       taxflag : false,
//       active:true
//     },
//     {
//       name : "Toilet Paper",
//       description : "Charmin 36Rolls Aloe",
//       store : '56eb750debdfa1e8298c25cc',
//       cost : 13.75,
//       taxflag : true,
//       active:true
//     }
//   );
// });

// Store.find({}).remove(function(){
//   Store.create(
//     {
//       name:'Target - Odessa1', 
//       description:'Target in odessa, 54 n veterans',
//       street:'123 spooner st',
//       city:'land o lakes',
//       state:'fl',
//       geocode:'28.1862503,-82.5445883',
//       active: true
//     },
//     {
//       name:'Target - Odessa2', 
//       description:'Target in odessa, 54 n veterans',
//       street:'123 spooner st',
//       city:'land o lakes',
//       state:'fl',
//       geocode:'28.1862503,-82.5445883',
//       active: true
//     },
//     {
//       name:'Target - Odessa3', 
//       description:'Target in odessa, 54 n veterans',
//       street:'123 spooner st',
//       city:'land o lakes',
//       state:'fl',
//       geocode:'28.1862503,-82.5445883',
//       active: true
//     }
//   );
// });


// Shoppinglist.find({}).remove(function() {
//   Shoppinglist.create({
//     name : 'Bills CC Budget',
//     description : 'Only things that get paid for using the bills creditcard go on this list.  Gas, Groceries, Emergencies, etc.',
//     active: true,
//     startdate: '2015-11-05',
//     stopdate: '2015-11-12',
//     owner: "5641eb1e8f83dce417a42ada",
//     budget: 200.00,
//     shared: ["563cc0c1659a1954145dde42"],
//     listItems: []
//   },
//   {
//     name : 'Bills CC Budget',
//     description : 'Only things that get paid for using the bills creditcard go on this list.  Gas, Groceries, Emergencies, etc.',
//     active: true,
//     startdate: '2015-10-31',
//     stopdate: '2015-11-06',
//     owner: "5641eb1e8f83dce417a42ada",
//     budget: 200.00,
//     shared: ["563cc0c1659a1954145dde42"],
//     listItems: []
//   },
//   {
//     name : 'Bills CC Budget',
//     description : 'Only things that get paid for using the bills creditcard go on this list.  Gas, Groceries, Emergencies, etc.',
//     active: true,
//     startdate: '2015-10-23',
//     stopdate: '2015-10-30',
//     owner: "5641eb1e8f83dce417a42ada",
//     budget: 200.00,
//     shared: ["563cc0c1659a1954145dde42"],
//     listItems: 
//       []
//   },
//   {
//     name : 'Bills CC Budget',
//     description : 'Only things that get paid for using the bills creditcard go on this list.  Gas, Groceries, Emergencies, etc.',
//     active: true,
//     startdate: '2015-10-15',
//     stopdate: '2015-10-22',
//     owner: "5641eb1e8f83dce417a42ada",
//     budget: 200.00,
//     shared: ["563cc0c1659a1954145dde42"],
//     listItems: []
//   });
// });


/*User.find({}).remove(function() {
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
});*/

/*Thing.find({}).remove(function() {
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
});*/