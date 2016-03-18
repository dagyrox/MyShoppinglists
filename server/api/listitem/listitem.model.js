'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ListitemSchema = new Schema({
  itemid: String,
  done: Boolean
});

module.exports = mongoose.model('Listitem', ListitemSchema);