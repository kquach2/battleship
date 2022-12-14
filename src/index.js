import {
  displayGameEndPopup,
  displayPlacementScreen,
  displayUserShips,
  hideGameEndScreen,
  hidePlacementScreen,
  removeAllChildNodes,
} from "./dom-stuff";
import { playerFactory, shipFactory } from "./factories";
import placeShipsRandomly from "./game";
import initialLoad from "./initial-load";
import "./styles.css";

initialLoad();
(() => {
  let human = playerFactory("human");
  displayUserShips(human.gameBoard.getBoard());

  let computer = playerFactory("computer");
  placeShipsRandomly(computer.gameBoard);

  let currentOrientation = "x";
  let currentWidth;
  let currentCallback;
  let nextShipToPlace;

  const addPlacementGridEventListeners = (width, callback, next) => {
    currentWidth = width;
    currentCallback = callback;
    nextShipToPlace = next;
    const placementMessage = document.querySelector("#placement-message");
    let cells = document.querySelectorAll("#placement-grid div");
    if (currentOrientation === "x") {
      cells.forEach((cell) => {
        cell.replaceWith(cell.cloneNode(true));
      });
      cells = document.querySelectorAll("#placement-grid div");
      cells.forEach((cell) => {
        cell.addEventListener("click", () => {
          if (
            human.gameBoard.placeShip(
              shipFactory(width),
              [parseInt(cell.dataset.row, 10), parseInt(cell.dataset.col, 10)],
              "x"
            ) === "success"
          ) {
            displayUserShips(human.gameBoard.getBoard());
            placementMessage.textContent = `Place your ${next}`;
            currentOrientation = "x";
            callback();
          }
        });
        cell.addEventListener("mouseenter", () => {
          for (
            let i = parseInt(cell.dataset.col, 10);
            i < parseInt(cell.dataset.col, 10) + width;
            i += 1
          ) {
            if (
              document.querySelector(
                `#placement-grid div[data-row='${cell.dataset.row}'][data-col='${i}'`
              )
            ) {
              document.querySelector(
                `#placement-grid div[data-row='${cell.dataset.row}'][data-col='${i}'`
              ).style.backgroundColor = "black";
              document.querySelector(
                `#placement-grid div[data-row='${cell.dataset.row}'][data-col='${i}'`
              ).style.borderColor = "white";
            }
          }
        });
        cell.addEventListener("mouseleave", () => {
          for (
            let i = parseInt(cell.dataset.col, 10);
            i < parseInt(cell.dataset.col, 10) + width;
            i += 1
          ) {
            if (
              document.querySelector(
                `#placement-grid div[data-row='${cell.dataset.row}'][data-col='${i}'`
              ) &&
              typeof human.gameBoard.getBoard()[parseInt(cell.dataset.row, 10)][
                i
              ] !== "object"
            ) {
              document.querySelector(
                `#placement-grid div[data-row='${cell.dataset.row}'][data-col='${i}'`
              ).style.backgroundColor = "";
              document.querySelector(
                `#placement-grid div[data-row='${cell.dataset.row}'][data-col='${i}'`
              ).style.borderColor = "black";
            }
          }
        });
      });
    } else {
      cells.forEach((cell) => {
        cell.replaceWith(cell.cloneNode(true));
      });
      cells = document.querySelectorAll("#placement-grid div");
      cells.forEach((cell) => {
        cell.addEventListener("click", () => {
          if (
            human.gameBoard.placeShip(
              shipFactory(width),
              [parseInt(cell.dataset.row, 10), parseInt(cell.dataset.col, 10)],
              "y"
            ) === "success"
          ) {
            displayUserShips(human.gameBoard.getBoard());
            placementMessage.textContent = `Place your ${next}`;
            currentOrientation = "x";
            callback();
          }
        });
        cell.addEventListener("mouseenter", () => {
          for (
            let i = parseInt(cell.dataset.row, 10);
            i < parseInt(cell.dataset.row, 10) + width;
            i += 1
          ) {
            if (
              document.querySelector(
                `#placement-grid div[data-row='${i}'][data-col='${cell.dataset.col}'`
              )
            ) {
              document.querySelector(
                `#placement-grid div[data-row='${i}'][data-col='${cell.dataset.col}'`
              ).style.backgroundColor = "black";
              document.querySelector(
                `#placement-grid div[data-row='${i}'][data-col='${cell.dataset.col}'`
              ).style.borderColor = "white";
            }
          }
        });
        cell.addEventListener("mouseleave", () => {
          for (
            let i = parseInt(cell.dataset.row, 10);
            i < parseInt(cell.dataset.row, 10) + width;
            i += 1
          ) {
            if (
              document.querySelector(
                `#placement-grid div[data-row='${i}'][data-col='${cell.dataset.col}'`
              ) &&
              typeof human.gameBoard.getBoard()[i][
                parseInt(cell.dataset.col, 10)
              ] !== "object"
            ) {
              document.querySelector(
                `#placement-grid div[data-row='${i}'][data-col='${cell.dataset.col}'`
              ).style.backgroundColor = "";
              document.querySelector(
                `#placement-grid div[data-row='${i}'][data-col='${cell.dataset.col}'`
              ).style.borderColor = "black";
            }
          }
        });
      });
    }
  };

  const placePatrolBoat = () => {
    addPlacementGridEventListeners(2, hidePlacementScreen);
  };
  const placeSubmarine = () => {
    addPlacementGridEventListeners(3, placePatrolBoat, "Patrol Boat");
  };

  const placeDestroyer = () => {
    addPlacementGridEventListeners(3, placeSubmarine, "Submarine");
  };
  const placeBattleship = () => {
    addPlacementGridEventListeners(4, placeDestroyer, "Destroyer");
  };
  const placeCarrier = () => {
    addPlacementGridEventListeners(5, placeBattleship, "Battleship");
  };

  const addComputerBoardCellsEventListeners = () => {
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
            if (computer.gameBoard.allSunk()) {
              displayGameEndPopup("human");
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
            if (human.gameBoard.allSunk()) {
              displayGameEndPopup("computer");
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

  const rotate = document.querySelector("#rotate");
  rotate.addEventListener("click", () => {
    if (currentOrientation === "x") {
      currentOrientation = "y";
    } else {
      currentOrientation = "x";
    }
    addPlacementGridEventListeners(
      currentWidth,
      currentCallback,
      nextShipToPlace
    );
  });

  const restart = document.querySelector("#restart");
  restart.addEventListener("click", () => {
    hideGameEndScreen();
    const userGrid = document.querySelector("#user-grid");
    const computerGrid = document.querySelector("#computer-grid");
    const placementGrid = document.querySelector("#placement-grid");
    removeAllChildNodes(userGrid);
    removeAllChildNodes(computerGrid);
    removeAllChildNodes(placementGrid);
    initialLoad();
    displayPlacementScreen();

    human = playerFactory("human");
    displayUserShips(human.gameBoard.getBoard());

    computer = playerFactory("computer");
    placeShipsRandomly(computer.gameBoard);

    placeCarrier();
    addComputerBoardCellsEventListeners();
  });
  placeCarrier();
  addComputerBoardCellsEventListeners();
})();
