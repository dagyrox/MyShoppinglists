/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Listitem = require('./listitem.model');

exports.register = function(socket) {
  Listitem.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Listitem.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('listitem:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('listitem:remove', doc);
}