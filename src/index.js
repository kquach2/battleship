import {
  displayGameEndPopup,
  displayUserShips,
  removeAllChildNodes,
} from "./dom-stuff";
import { playerFactory, shipFactory } from "./factories";
import { gameIsOver } from "./game";
import initialLoad from "./initial-load";
import "./styles.css";

initialLoad();
(() => {
  let human = playerFactory("human");
  human.gameBoard.placeShip(shipFactory(5), [1, 3], "x");
  human.gameBoard.placeShip(shipFactory(2), [3, 1], "x");

  displayUserShips(human.gameBoard.getBoard());

  let computer = playerFactory("computer");
  computer.gameBoard.placeShip(shipFactory(5), [1, 3], "x");
  computer.gameBoard.placeShip(shipFactory(2), [3, 1], "x");
  computer.gameBoard.placeShip(shipFactory(2), [0, 0], "y");

  const addEventListeners = () => {
    const computerBoardCells = document.querySelectorAll("#computer-grid div");
    computerBoardCells.forEach((computerBoardCell) => {
      computerBoardCell.addEventListener(
        "click",
        () => {
          const userPlayResult = human.makePlay(computer.gameBoard, [
            parseInt(computerBoardCell.dataset.row, 10),
            parseInt(computerBoardCell.dataset.col, 10),
          ]);
          if (userPlayResult === "hit") {
            if (
              computer.gameBoard
                .getBoard()
                [parseInt(computerBoardCell.dataset.row, 10)][
                  parseInt(computerBoardCell.dataset.col, 10)
                ].isSunk()
            ) {
              computerBoardCell.classList.add("sunk");
              for (let j = 0; j < 10; j += 1) {
                if (
                  computer.gameBoard.getBoard()[
                    parseInt(computerBoardCell.dataset.row, 10)
                  ][j] ===
                    computer.gameBoard.getBoard()[
                      parseInt(computerBoardCell.dataset.row, 10)
                    ][parseInt(computerBoardCell.dataset.col, 10)] &&
                  j !== parseInt(computerBoardCell.dataset.col, 10)
                ) {
                  document
                    .querySelector(
                      `#computer-grid div[data-row='${parseInt(
                        computerBoardCell.dataset.row,
                        10
                      )}'][data-col='${j}']`
                    )
                    .classList.replace("hit", "sunk");
                }
              }

              for (let i = 0; i < 10; i += 1) {
                if (
                  computer.gameBoard.getBoard()[i][
                    parseInt(computerBoardCell.dataset.col, 10)
                  ] ===
                    computer.gameBoard.getBoard()[
                      parseInt(computerBoardCell.dataset.row, 10)
                    ][parseInt(computerBoardCell.dataset.col, 10)] &&
                  i !== parseInt(computerBoardCell.dataset.row, 10)
                ) {
                  document
                    .querySelector(
                      `#computer-grid div[data-row='${i}'][data-col='${parseInt(
                        computerBoardCell.dataset.col,
                        10
                      )}']`
                    )
                    .classList.replace("hit", "sunk");
                }
              }
            } else {
              computerBoardCell.classList.add("hit");
            }
            if (gameIsOver(human.gameBoard, computer.gameBoard)) {
              if (human.gameBoard.allSunk()) displayGameEndPopup("computer");
              else displayGameEndPopup("human");
              // display gameEndPopup with winner info
              return;
            }
          } else computerBoardCell.classList.add("miss");

          const array = computer.makeRandomPlay(human.gameBoard);
          const compPlayResult = array[0];
          const cellAttacked = array[1];
          if (compPlayResult === "hit") {
            if (
              human.gameBoard
                .getBoard()
                [cellAttacked[0]][cellAttacked[1]].isSunk()
            ) {
              document
                .querySelector(
                  `#user-grid div[data-row='${cellAttacked[0]}'][data-col='${cellAttacked[1]}']`
                )
                .classList.add("sunk");
              // find all the cells that contain the same boat
              for (let j = 0; j < 10; j += 1) {
                if (
                  human.gameBoard.getBoard()[cellAttacked[0]][j] ===
                    human.gameBoard.getBoard()[cellAttacked[0]][
                      cellAttacked[1]
                    ] &&
                  j !== cellAttacked[1]
                ) {
                  document
                    .querySelector(
                      `#user-grid div[data-row='${cellAttacked[0]}'][data-col='${j}']`
                    )
                    .classList.replace("hit", "sunk");
                }
              }

              for (let i = 0; i < 10; i += 1) {
                if (
                  human.gameBoard.getBoard()[i][cellAttacked[1]] ===
                    human.gameBoard.getBoard()[cellAttacked[0]][
                      cellAttacked[1]
                    ] &&
                  i !== cellAttacked[0]
                ) {
                  document
                    .querySelector(
                      `#user-grid div[data-row='${i}'][data-col='${cellAttacked[1]}']`
                    )
                    .classList.replace("hit", "sunk");
                }
              }
            } else
              document
                .querySelector(
                  `#user-grid div[data-row='${cellAttacked[0]}'][data-col='${cellAttacked[1]}']`
                )
                .classList.add("hit");
            if (gameIsOver(human.gameBoard, computer.gameBoard)) {
              if (human.gameBoard.allSunk()) displayGameEndPopup("computer");
              else displayGameEndPopup("human");
              // display gameEndPopup with winner info
            }
          } else
            document
              .querySelector(
                `#user-grid div[data-row='${cellAttacked[0]}'][data-col='${cellAttacked[1]}']`
              )
              .classList.add("miss");
        },
        { once: true }
      );
    });
  };

  addEventListeners();

  const restart = document.querySelector("#restart");
  restart.addEventListener("click", () => {
    const overlay = document.querySelector("#overlay");
    overlay.style.display = "none";
    const userGrid = document.querySelector("#user-grid");
    const computerGrid = document.querySelector("#computer-grid");
    removeAllChildNodes(userGrid);
    removeAllChildNodes(computerGrid);
    initialLoad();
    addEventListeners();
    human = playerFactory("human");
    human.gameBoard.placeShip(shipFactory(5), [1, 3], "x");
    human.gameBoard.placeShip(shipFactory(2), [3, 1], "x");

    displayUserShips(human.gameBoard.getBoard());

    computer = playerFactory("computer");
    computer.gameBoard.placeShip(shipFactory(5), [1, 3], "x");
    computer.gameBoard.placeShip(shipFactory(2), [3, 1], "x");
  });
})();
