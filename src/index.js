import { playerFactory } from "./factories";
import { gameIsOver } from "./game";
import initialLoad from "./initial-load";
import "./styles.css";

initialLoad();

const human = playerFactory("human");
const computer = playerFactory("computer");

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("click", () => {
    human.makePlay(computer.gameBoard, [
      parseInt(square.dataset.row, 10),
      parseInt(square.dataset.col, 10),
    ]);
    if (gameIsOver(human.gameBoard, computer.gameBoard)) {
      // display gameEndPopup with winner info
      return;
    }
    computer.makeRandomPlay(human.gameBoard);
    if (gameIsOver(human.gameBoard, computer.gameBoard)) {
      // display gameEndPopup with winner info
      return;
    }
  });
});
