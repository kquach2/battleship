import { shipFactory } from "./factories";
const gameIsOver = (board1, board2) => board1.allSunk() || board2.allSunk();

const placeShipsRandomly = (board) => {
  const possibleSpots = [];
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      possibleSpots.push([i, j]);
    }
  }

  const getRandomCoordinates = () =>
    possibleSpots[Math.floor(Math.random() * possibleSpots.length)];

  const updateUnattackedCoordinates = (coordinates) => {
    const index = possibleSpots.indexOf(coordinates);
    possibleSpots.splice(index, 1);
  };

  const carrier = shipFactory(5);
  const battleship = shipFactory(4);
  const destroyer = shipFactory(3);
  const submarine = shipFactory(3);
  const patrolBoat = shipFactory(2);

  const place = (ship) => {
    let randomDirection;
    const randomCoordinates = getRandomCoordinates();
    updateUnattackedCoordinates(randomCoordinates);
    if (Math.floor(Math.random() * 2) === 0) randomDirection = "x";
    else randomDirection = "y";
    if (board.placeShip(ship, randomCoordinates, randomDirection) === "fail")
      place(ship);
    else console.log(`[${randomCoordinates}] ${randomDirection}`);
  };

  place(carrier);
  place(battleship);
  place(destroyer);
  place(submarine);
  place(patrolBoat);
};

export { gameIsOver, placeShipsRandomly };
