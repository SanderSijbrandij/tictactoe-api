'use strict'

module.exports = function(options) {
  return function(hook) {
    if (hook.data.type === 'madeMove') {
      return hook.app.service("games").get(hook.id)
      .then((game) => {

        const userId = hook.params.user._id
        const position = hook.data.position
        const symbol = hook.data.symbol
        let data = {};

        if (!game.board[position] === ' ') {
          hook.data = data
        }
        else {
          let board = game.board
          board[position] = symbol
          let turn = (game.turn === game.playerOneId) ? game.playerTwoId : game.playerOneId
          data = { board, turn }
        }
        hook.data = data
      })
    } else { hook.id }
  }
}
