// before hook => sets initial gamestate on game creation
module.exports = function(hook) {
  // default game owner: currently logged in user
  const creator = hook.params.user
  const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

  // set the game's creator to player one
  hook.data.playerOneId = creator._id
    
  // set the board
  hook.data.board = board
}
