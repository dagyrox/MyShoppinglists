'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ShoppinglistSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  startdate: Date,
  stopdate: Date,
  owner: String,
  budget: Number,
  shared: Array,
  items: Array
});

module.exports = mongoose.model('Shoppinglist', ShoppinglistSchema);