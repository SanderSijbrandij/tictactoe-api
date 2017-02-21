'use strict'

module.exports = function(options) {
  return function(hook) {
    if (hook.data.type === 'resetGameState') {
      return hook.app.service("games").get(hook.id)
      .then((game) => {
        const defaultBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        hook.data = {
          board: defaultBoard,
          winner: false,
        }
      })
    }
  }
}
