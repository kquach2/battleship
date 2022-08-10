const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const updateMessage = (winner) => {
  const message = document.querySelector("#message");
  if (winner === "human") {
    message.textContent = "You win!";
  } else message.textContent = "The computer wins!";
};

const displayGameEndPopup = (winner) => {
  updateMessage(winner);
  const overlay = document.querySelector("#overlay");
  const gameEndPopup = document.querySelector("#gameend-popup");
  overlay.style.display = "block";
  gameEndPopup.style.display = "flex";
};

const displayPlacementScreen = () => {
  const placementScreen = document.querySelector("#placement-popup");
  const placementMessage = document.querySelector("#placement-message");
  placementMessage.textContent = "Place your Carrier";
  const overlay = document.querySelector("#overlay");
  overlay.style.display = "block";
  placementScreen.style.display = "flex";
};

const hidePlacementScreen = () => {
  const placementScreen = document.querySelector("#placement-popup");
  const overlay = document.querySelector("#overlay");
  overlay.style.display = "none";
  placementScreen.style.display = "none";
};

const hideGameEndScreen = () => {
  const gameEndPopup = document.querySelector("#gameend-popup");
  const overlay = document.querySelector("#overlay");
  overlay.style.display = "none";
  gameEndPopup.style.display = "none";
};

const displayUserShips = (board) => {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (typeof board[i][j] === "object") {
        document
          .querySelector(
            `#placement-grid div[data-row='${i}'][data-col='${j}']`
          )
          .classList.add("ship");
        document
          .querySelector(`#user-grid div[data-row='${i}'][data-col='${j}']`)
          .classList.add("ship");
      }
    }
  }
};

export {
  displayGameEndPopup,
  displayPlacementScreen,
  displayUserShips,
  removeAllChildNodes,
  hidePlacementScreen,
  hideGameEndScreen,
};
