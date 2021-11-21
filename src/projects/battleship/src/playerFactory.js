import shipFactory from "./shipFactory";

export default function playerFactory(name) {

  function shootEnemy(x, y, opponent) {
    const wasHit = opponent.checkHit(x, y, opponent);
    if (wasHit != false) {
      routeHit(wasHit, opponent);
    }
  }

  const routeHit = (shipInfo, opponent) => {
    const workingStr = shipInfo.split(' ');
    ships[workingStr[0]].receiveHit(workingStr[1]);
    const wasSunk = ships[workingStr[0]].checkIfSunk();
    if (wasSunk) {
      opponent.gameState();
    }
  }

  const ships = {
    carrier: shipFactory('carrier', 5),
    battleship: shipFactory('battleship', 4),
    cruiser: shipFactory('cruiser', 3),
    submarine: shipFactory('submarine', 2),
    destroyer: shipFactory('destroyer', 2)
  }

  return {
    name,
    ships,
    routeHit,
    shootEnemy
  }
}