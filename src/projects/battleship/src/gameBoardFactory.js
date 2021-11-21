export default function gameBoardFactory(name) {
  // create 2d array for player gameboard
  const board = [...Array(10)].map(() => Array(10).fill( {label: '', value: 0 } ));
  
  let sunkShips = 0;

  function placeShip(shipName, shipSize, direction, startingX, startingY) {
    // places ship going DOWN
      if (direction === 'vertical') {
        for (let i = 0; i < shipSize; i++) {
          board[startingX][startingY + i] = {label: shipName + ' ' + i, value: 1};
        }
      }
      // places ship going RIGHT
      if (direction === 'horizontal') {
        for (let i = 0; i < shipSize; i++) {
          board[startingX + i][startingY] = {label: shipName + ' ' + i, value: 1};
        }
      } 
    }

  function gameState() {
    sunkShips++;
    if (sunkShips === 5) {
      const gameOver = document.getElementById('gameOverText');
      gameOver.style.display = 'block';

      // blocks more shots from being made by adding a listener on the entire main element
      // which captures the event and stops it from propagating back to the box clicked
      let clickBlocker = document.querySelector('main');
      clickBlocker.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
      }, true);
    }
  }

  function checkHit(x, y, opponent) {
    if (board[x][y].value === 1) {
      let tempName = board[x][y].label;
      board[x][y] = {label: tempName, value: 2};

      let opName = '';
      if (opponent.name == 'AIBoard') {
        opName = 'AI';
      }
      if (opponent.name == 'playerBoard') {
        opName = 'player';
      }
      // sets color of hit
      const box = document.getElementById(opName + 'Box' + x + y);
      box.setAttribute('class', 'boxHit');

      return tempName;
    } 
    if (board[x][y].value === 0) {
      board[x][y] = {label: '', value: 3};

      let opName = '';
      if (opponent.name == 'AIBoard') {
        opName = 'AI';
      }
      if (opponent.name == 'playerBoard') {
        opName = 'player';
      }
      // sets color of miss
      const box = document.getElementById(opName + 'Box' + x + y);
      box.setAttribute('class', 'boxMiss');

      return false;
    } 
  }

  return {
    name,
    board,
    placeShip,
    gameState,
    checkHit,
    sunkShips
  };
}