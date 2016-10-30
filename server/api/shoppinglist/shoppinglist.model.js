'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ShoppinglistSchema = new Schema({
  name: String,
  description: String,
  active: Boolean,
  startdate: Date,
  stopdate: Date,
  owner: String,
  budget: Number,
  shared: Array,
  listItems: Array
});

module.exports = mongoose.model('Shoppinglist', ShoppinglistSchema);