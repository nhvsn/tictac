let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']; // at index 2,5,8 is a new row

const createBoard = () => {
  // create an empty string to create 'box'
  let separate = '';
  for (let i = 0; i < 9; i++) {
    // want to start after index 0 for first | separator
    separate += board[i] + ' | ';
    // once we reach every 3rd box or index 2,5,8, print out columns and add a new row
    if (i === 2 || i === 5 || i === 8) {
      console.log(separate);
      // create the separator
      console.log('-----------');
      // reset separator
      separate = '';
    }
  }
};

module.exports = { createBoard, board };
