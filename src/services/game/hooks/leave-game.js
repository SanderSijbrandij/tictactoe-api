'use strict'

module.exports = function(options) {
  return function(hook) {
    if (hook.data.type === 'leave') {
      return hook.app.service("games").get(hook.id)
      .then((game) => {
        let data = {};
        const userId = hook.params.user._id

        // if the user is already in
        if (userId === game.playerOneId) {
          data = { playerOneId: null }
        } else if (game.playerTwoId === userId) {
          data = { playerTwoId: null }
        }
        hook.data = data
      })
    }
  }
}
