function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const updateMessage = (winner) => {
  const message = document.querySelector("#message");
  if (winner === "human") {
    message.textContent = "You win!";
  } else message.textContent = "The computer wins!";
};

const displayGameEndPopup = (winner) => {
  updateMessage(winner);
  const overlay = document.querySelector("#overlay");
  overlay.style.display = "block";
};

const displayUserShips = (board) => {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (typeof board[i][j] === "object") {
        document
          .querySelector(`#user-grid div[data-row='${i}'][data-col='${j}']`)
          .classList.add("ship");
      }
    }
  }
};

export { displayGameEndPopup, displayUserShips, removeAllChildNodes };
