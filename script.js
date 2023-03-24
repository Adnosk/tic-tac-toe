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

function renderBoard() {
  const gameboard = Gameboard.getBoard();
  const boardContainer = document.querySelector('#board-container');

  let html = '';
  for (let i = 0; i < gameboard.length; i++) {
    html += `<div class="cell">${gameboard[i]}</div>`;
    if ((i + 1) % 3 === 0) {
      html += '<br>';
    }
  }

  boardContainer.innerHTML = html;
}

renderBoard();
