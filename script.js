// Gameboard module
const Gameboard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];

  const getBoard = () => board;

  const setBoard = (index, value) => {
    if (board[index] === '') {
      board[index] = value;
      return true;
    }
    return false;
  };

  const resetBoard = () => {
    board.fill('');
  };

  return { getBoard, setBoard, resetBoard };
})();

// Player factory function
const Player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;

  return { getName, getSymbol };
};
