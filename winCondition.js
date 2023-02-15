const tictac = require('./createBoard');

// create win condition
const winCondition = () => {
  // start with horizontal first
  if (tictac.board[0] === tictac.board[1] && tictac.board[0] === tictac.board[2] && tictac.board[2] !== ' ') {
    console.log(`Player ${tictac.board[0]} has won the game!`);
    process.exit(0);
  } else if (tictac.board[3] === tictac.board[4] && tictac.board[3] === tictac.board[5] && tictac.board[5] !== ' ') {
    console.log(`Player ${tictac.board[3]} has won the game!`);
    process.exit(0);
  } else if (tictac.board[6] === tictac.board[7] && tictac.board[6] === tictac.board[8] && tictac.board[8] !== ' ') {
    console.log(`Player ${tictac.board[6]} has won the game!`);
    process.exit(0);
  }
  // check vertical
  else if (tictac.board[0] === tictac.board[3] && tictac.board[0] === tictac.board[6] && tictac.board[6] !== ' ') {
    console.log(`Player ${tictac.board[0]} has won the game!`);
    process.exit(0);
  } else if (tictac.board[1] === tictac.board[4] && tictac.board[1] === tictac.board[7] && tictac.board[7] !== ' ') {
    console.log(`Player ${tictac.board[1]} has won the game!`);
    process.exit(0);
  } else if (tictac.board[2] === tictac.board[5] && tictac.board[2] === tictac.board[8] && tictac.board[8] !== ' ') {
    console.log(`Player ${tictac.board[2]} has won the game!`);
    process.exit(0);
  }
  // check diagonal
  else if (tictac.board[0] === tictac.board[4] && tictac.board[0] === tictac.board[8] && tictac.board[8] !== ' ') {
    console.log(`Player ${tictac.board[0]} has won the game!`);
    process.exit(0);
  } else if (tictac.board[2] === tictac.board[4] && tictac.board[2] === tictac.board[6] && tictac.board[6] !== ' ') {
    console.log(`Player ${tictac.board[2]} has won the game!`);
    process.exit(0);
  }
};

module.exports = { winCondition };
