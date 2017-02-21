'use strict'

module.exports = function(options) {
  return function(hook) {
    if (hook.data.type === 'join') {
      return hook.app.service("games").get(hook.id)
      .then((game) => {
        let data = {};
        const userId = hook.params.user._id

        // if the user is already in
        if (!game.playerOneId && game.playerTwoId !== userId) {
          data = { playerOneId: userId }
        } else if (!game.playerTwoId && game.playerOneId !== userId) {
          data = { playerTwoId: userId }
        }
        hook.data = data
      })
    } else { hook.id }
  }
}
