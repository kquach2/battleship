import { playerFactory, shipFactory } from "./src/factories";
import { gameIsOver } from "./src/game";

test("gameIsOver function returns true if one player's ships have all sunk", () => {
  const player1 = playerFactory("human", "cody");
  const player2 = playerFactory("human", "joe");
  player1.gameBoard.placeShip(shipFactory(1), [0, 0]);
  player2.gameBoard.placeShip(shipFactory(1), [0, 0]);
  player1.gameBoard.receiveAttack([0, 0]);
  expect(gameIsOver(player1.gameBoard, player2.gameBoard)).toBe(true);
});

test("gameIsOver function returns false if no player's ships have all sunk", () => {
  const player1 = playerFactory("human", "cody");
  const player2 = playerFactory("human", "joe");
  player1.gameBoard.placeShip(shipFactory(1), [0, 0]);
  player2.gameBoard.placeShip(shipFactory(1), [0, 0]);
  expect(gameIsOver(player1.gameBoard, player2.gameBoard)).toBe(false);
});
