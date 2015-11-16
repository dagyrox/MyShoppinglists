'use strict';

var _ = require('lodash');
var Shoppinglist = require('./shoppinglist.model');

// Get list of shoppinglists
exports.index = function(req, res) {
  Shoppinglist.find(function (err, shoppinglists) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(shoppinglists);
  });
};

// Get a single shoppinglist
exports.show = function(req, res) {
  Shoppinglist.findById(req.params.id, function (err, shoppinglist) {
    if(err) { return handleError(res, err); }
    if(!shoppinglist) { return res.status(404).send('Not Found'); }
    return res.json(shoppinglist);
  });
};

// Creates a new shoppinglist in the DB.
exports.create = function(req, res) {
  Shoppinglist.create(req.body, function(err, shoppinglist) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(shoppinglist);
  });
};

// Updates an existing shoppinglist in the DB.
exports.update = function(req, res) {
  console.log('here');
  if(req.body._id) { delete req.body._id; }
  Shoppinglist.findById(req.params.id, function (err, shoppinglist) {
    if (err) { return handleError(res, err); }
    if(!shoppinglist) { return res.status(404).send('Not Found'); }
    var updated = _.merge(shoppinglist, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(shoppinglist);
    });
  });
};

// Deletes a shoppinglist from the DB.
exports.destroy = function(req, res) {
  Shoppinglist.findById(req.params.id, function (err, shoppinglist) {
    if(err) { return handleError(res, err); }
    if(!shoppinglist) { return res.status(404).send('Not Found'); }
    shoppinglist.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}