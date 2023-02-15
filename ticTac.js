const { create } = require('domain');
const tictac = require('./createBoard');
const play = require('./playGame');

// create a function that defaults first move to X and move after is O
const doYouWantToPlayLetsPlay = () => {
  // create a question to record if player wants to play or not
  play.readline.question(`Do you want to play? Let's play.. Y or N `, (choice) => {
    let answer = choice.toUpperCase();
    if (answer === 'Y') {
      // continue to game and create board
      tictac.createBoard();
      // invoke another function that asks the player to make a move
      play.playGame();
    } else if (answer === 'N') {
      console.log('Lame');
      process.exit(0);
    }
  });
};

doYouWantToPlayLetsPlay();
