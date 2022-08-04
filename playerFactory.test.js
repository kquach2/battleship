import { playerFactory } from "./src/factories";

test("player board is updated after the computer makes a random play", () => {
  const human = playerFactory("human", "cody");
  const computer = playerFactory("computer");
  const old = JSON.stringify(human.gameBoard.getBoard()); // store the gameboard before any move is made, why do i have to stringify this right away for the test to work?
  computer.makeRandomPlay(human.gameBoard);
  const updated = JSON.stringify(human.gameBoard.getBoard());

  expect(updated).not.toEqual(old);
});

test("computer board is updated after the computer makes a random play", () => {
  const human = playerFactory("human", "cody");
  const computer = playerFactory("computer");
  human.makePlay(computer.gameBoard, [4, 4]);
  const updated = JSON.stringify(computer.gameBoard.getBoard());

  expect(updated).toEqual(
    JSON.stringify([
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "x", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ])
  );
});
