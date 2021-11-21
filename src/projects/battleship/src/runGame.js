import playerFactory from "./playerFactory";
import gameBoardFactory from "./gameBoardFactory";

const player = playerFactory('player');
const playerBoard = gameBoardFactory('playerBoard');
const AI = playerFactory('AI');
const AIBoard = gameBoardFactory('AIBoard');

export default function runGame() {

  function randomShipPlacement(nameOfBoard, ship) {
    let randomDirectionNum = 0;
    let randomDirection = '';
    let randomX = 0;
    let randomY = 0;
    let goodPair = false;

    // while loop to run through until it gets a good placement for the ship
    while (goodPair === false) {
      randomDirectionNum = Math.floor(Math.random() * 2);
      if (randomDirectionNum === 0) {
        randomDirection = 'horizontal';
      }
      if (randomDirectionNum === 1) {
        randomDirection = 'vertical';
      }

      randomX = Math.floor(Math.random() * (10 - ship.shipSize));
      randomY = Math.floor(Math.random() * (10 - ship.shipSize));

      // these check if every spot in the array for a given ship size and placement is
      // unoccupied; all spots are open, it sets goodPair to true and exits the while loop
      if (randomDirection === 'horizontal') {
        if ((randomX + ship.shipSize) < 9) {
          let workingNum = 0;
          for (let i = 0; i < ship.shipSize; i++) {
            workingNum = workingNum + nameOfBoard.board[randomX + i][randomY].value;
          }
          if (workingNum === 0) {
            goodPair = true;
          }
        }
      }

      if (randomDirection === 'vertical') {
        if ((randomY + ship.shipSize) < 9) {
          let workingNum = 0;
          for (let i = 0; i < ship.shipSize; i++) {
            workingNum = workingNum + nameOfBoard.board[randomX][randomY + i].value;
          }
          if (workingNum === 0) {
            goodPair = true;
          }
        }
      }
    }
    // the return calls the function using the direction and coordinates generated
    return nameOfBoard.placeShip(ship.name, ship.shipSize, randomDirection, randomX, randomY);
  }

  randomShipPlacement(AIBoard, AI.ships.carrier);
  randomShipPlacement(AIBoard, AI.ships.battleship);
  randomShipPlacement(AIBoard, AI.ships.cruiser);
  randomShipPlacement(AIBoard, AI.ships.submarine);
  randomShipPlacement(AIBoard, AI.ships.destroyer);
  randomShipPlacement(playerBoard, player.ships.carrier);
  randomShipPlacement(playerBoard, player.ships.battleship);
  randomShipPlacement(playerBoard, player.ships.cruiser);
  randomShipPlacement(playerBoard, player.ships.submarine);
  randomShipPlacement(playerBoard, player.ships.destroyer);

  // this array tracks where the AI has shot
  const AIShots = [...Array(10)].map(() => Array(10).fill(0));


  const playerShot = (e) => {
    // gets the ID of the box clicked, splits it by character, then pulls the last two
    // numbers which are the x and y coordinates for that box
    const workingArr = e.target.id.split('');
    const x = workingArr[workingArr.length - 2];
    const y = workingArr[workingArr.length - 1];

    // check if the shot has already been made by the player
    if (AIBoard.board[x][y].value === 0 || AIBoard.board[x][y].value === 1) {
      player.shootEnemy(x, y, AIBoard);
      AIShot();
    }
  };

  // event listener for player shot
  const AIMapping = document.getElementById('AIBoard');
  AIMapping.addEventListener('mousedown', playerShot);

  const AIShot = () => {
    let goodAIShot = false;
    let AIx = 0;
    let AIy = 0;

    // check shots array to not shoot the same spot twice
    while (goodAIShot === false) {
      AIx = Math.floor(Math.random() * 10);
      AIy = Math.floor(Math.random() * 10);

      if (AIShots[AIx][AIy] === 0) {
        goodAIShot = true;
        AIShots[AIx][AIy] = 1;
      }
    }
    
    AI.shootEnemy(AIx, AIy, playerBoard);
  };


}

