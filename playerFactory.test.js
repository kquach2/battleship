import { playerFactory } from "./src/factories";

test("makePlay correctly returns the result of receiveAttack", () => {
  const human = playerFactory("human", "cody");
  const computer = playerFactory("computer");
  expect(human.makePlay(computer.gameBoard, [4, 4])).toBe("miss");
});
