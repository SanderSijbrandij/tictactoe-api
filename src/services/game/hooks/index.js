'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const common = require('feathers-hooks-common');

const setInitialGamestate = require('./set-initial-gamestate')
const joinGame = require('./join-game')
const leaveGame = require('./leave-game')
const makeMove = require('./make-move')
const resetGameState = require('./reset-gamestate')
const hasWon = require('./check-winner')
const populatePlayerOne = common.populate('playerOne', { service: 'users', field: 'playerOneId' })
const populatePlayerTwo = common.populate('playerTwo', { service: 'users', field: 'playerTwoId' })

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
  ],
  find: [],
  get: [],
  create: [setInitialGamestate],
  update: [joinGame(), leaveGame(), resetGameState(), makeMove()],
  patch: [joinGame(), leaveGame(), resetGameState(), makeMove()],
  remove: []
};

exports.after = {
  all: [populatePlayerOne, populatePlayerTwo],
  find: [],
  get: [],
  create: [],
  update: [hasWon],
  patch: [hasWon],
  remove: []
};
