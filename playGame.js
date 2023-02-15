const check = require('./winCondition');
const tictac = require('./createBoard');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let player = 'X';
let draw = 0;
// once we create the board, this function will update the board based off who's turn it is and mark that index position,
const playGame = () => {
  // will need to ask the player which position they want to put their mark on
  readline.question(`${player}! Please choose a position from 1-9 to place your move!`, (pos) => {
    // since input will be 1-9 and index starts 0, will need to subtract one
    let position = pos - 1;

    // depending on the position of choice, will update the the board based off player
    if (tictac.board[position] === ' ') {
      tictac.board[position] = player;
      draw++;
      tictac.createBoard();
      if (player === 'X') {
        player = 'O';
      } else if (player === 'O') {
        player = 'X';
      }
    } else if (tictac.board[position] === 'X' || tictac.board[position] === 'O') {
      console.log(`You picked ${position + 1} but it is already taken! Please try again!`);
      playGame();
    }
    // check for draw condition
    check.winCondition();
    if (draw === 9) {
      readline.question('Game is a draw!', (answer) => {
        if (answer.toUpperCase() === 'Y') {
          console.log('Better Luck Next Time!');
          process.exit(0);
        } else if (answer.toUpperCase() === 'N') {
          console.log('GOODBYE!');
          process.exit(0);
        }
      });
    }
    playGame();
  });
};

module.exports = { playGame, readline };
