'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StoreSchema = new Schema({
  name: String,
  description: String,
  street: String,
  city: String,
  state: String,
  geocode: String,
  active: Boolean
});

module.exports = mongoose.model('Store', StoreSchema);