'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemSchema = new Schema({
  name: String,
  description: String,
  store: String,
  cost: Number,
  taxable: Boolean,
  active: Boolean
});

module.exports = mongoose.model('Item', ItemSchema);