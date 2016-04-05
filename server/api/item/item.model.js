'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemSchema = new Schema({
  name: String,
  description: String,
  category: String,
  size: String,
  active: Boolean
});

module.exports = mongoose.model('Item', ItemSchema);