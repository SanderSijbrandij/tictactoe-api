'use strict'

const winningPositions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

function hasWon(board) {
  return (winningPositions.filter((line) => {
    if (board[line[0]] === board[line[1]] &&
        board[line[1]] === board[line[2]] &&
        board[line[0]] !== ' ') {
      return true
    } else { return false}
  }).length > 0)
}

module.exports = function(hook) {
  hook.result.winner = hasWon(hook.result.board)
}
