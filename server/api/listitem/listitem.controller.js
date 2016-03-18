'use strict';

var _ = require('lodash');
var Listitem = require('./listitem.model');

// Get list of listitems
exports.index = function(req, res) {
  Listitem.find(function (err, listitems) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(listitems);
  });
};

// Get a single listitem
exports.show = function(req, res) {
  Listitem.findById(req.params.id, function (err, listitem) {
    if(err) { return handleError(res, err); }
    if(!listitem) { return res.status(404).send('Not Found'); }
    return res.json(listitem);
  });
};

// Creates a new listitem in the DB.
exports.create = function(req, res) {
  Listitem.create(req.body, function(err, listitem) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(listitem);
  });
};

// Updates an existing listitem in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Listitem.findById(req.params.id, function (err, listitem) {
    if (err) { return handleError(res, err); }
    if(!listitem) { return res.status(404).send('Not Found'); }
    var updated = _.merge(listitem, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(listitem);
    });
  });
};

// Deletes a listitem from the DB.
exports.destroy = function(req, res) {
  Listitem.findById(req.params.id, function (err, listitem) {
    if(err) { return handleError(res, err); }
    if(!listitem) { return res.status(404).send('Not Found'); }
    listitem.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}