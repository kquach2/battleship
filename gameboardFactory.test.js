import { shipFactory, gameboardFactory } from "./src/app-logic";

test("getBoard returns the gameboard", () => {
  expect(gameboardFactory().getBoard()).toEqual([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
});

test("placeShip places a ship of length 3 at the correct spot on the gameboard in the x direction", () => {
  const gameBoard = gameboardFactory();
  gameBoard.placeShip(shipFactory(3), 0, 0, "x");
  expect(JSON.stringify(gameBoard.getBoard())).toEqual(
    JSON.stringify([
      [
        shipFactory(3),
        shipFactory(3),
        shipFactory(3),
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ])
  );
});

test("placeShip places a ship of length 3 at the correct spot on the gameboard in the y direction", () => {
  const gameBoard = gameboardFactory();
  gameBoard.placeShip(shipFactory(3), 3, 2, "y");
  expect(JSON.stringify(gameBoard.getBoard())).toEqual(
    JSON.stringify([
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", shipFactory(3), "", "", "", "", "", "", ""],
      ["", "", shipFactory(3), "", "", "", "", "", "", ""],
      ["", "", shipFactory(3), "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ])
  );
});

test("placeShip places a ship of length 1 at the correct spot on the gameboard", () => {
  const gameBoard = gameboardFactory();
  gameBoard.placeShip(shipFactory(1), 3, 2);
  expect(JSON.stringify(gameBoard.getBoard())).toEqual(
    JSON.stringify([
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", shipFactory(1), "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ])
  );
});

test("receiveAttack results in the correct ship on the gameboard being hit", () => {
  const gameBoard = gameboardFactory();
  gameBoard.placeShip(shipFactory(1), 3, 2);
  gameBoard.receiveAttack(3, 2);
  expect(gameBoard.getBoard()[3][2].getHP()).toBe(0);
});

test("receiveAttack results in the correct spot on the gameboard being marked when the attack does not hit a ship ", () => {
  const gameBoard = gameboardFactory();
  gameBoard.receiveAttack(3, 2);
  expect(gameBoard.getBoard()[3][2]).toBe("x");
});

test("isSunk returns the correct value when all ships on the board have not sunk ", () => {
  const gameBoard = gameboardFactory();
  gameBoard.placeShip(shipFactory(1), 3, 2);
  expect(gameBoard.allSunk()).toBe(false);
});

test("isSunk returns the correct value when all ships on the board have sunk ", () => {
  const gameBoard = gameboardFactory();
  gameBoard.placeShip(shipFactory(1), 3, 2);
  gameBoard.receiveAttack(3, 2);
  expect(gameBoard.allSunk()).toBe(true);
});
