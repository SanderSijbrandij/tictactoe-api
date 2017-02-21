'use strict';
const game = require('./game');
const user = require('./user');
const authentication = require('./authentication');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(game);
};
