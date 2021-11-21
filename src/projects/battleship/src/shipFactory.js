export default function shipFactory(name, size) {
  const shipSize = size;
  const shipHits = [];
  let isSunk = false;

  for (let i = 0; i < shipSize; i++) {
    shipHits.push(0);
  }

  const receiveHit = (num) => {
    if (shipHits[num] === 0) {
      shipHits[num] = 1;
    }
  }

  const checkIfSunk = () => {
    if (shipHits.reduce((total, curr) => total + curr) === shipSize) {
      isSunk = true;
      return true;
    }
  }

  return {
    name,
    shipSize,
    shipHits,
    isSunk,
    receiveHit,
    checkIfSunk
  }
}