'use strict';

// game-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  playerOneId: { type: Schema.Types.ObjectId, ref: 'user' },
  playerTwoId: { type: Schema.Types.ObjectId, ref: 'user', required: false },
  turn: { type: Schema.Types.ObjectId, ref: 'user', required: false },
  board: [ {type: String, required: true} ],
  winner: { type: Boolean, required: true, default: false },
  
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const gameModel = mongoose.model('game', gameSchema);

module.exports = gameModel;
