const shipFactory = (length) => {
  const getLength = () => length;

  let hp = length;
  const getHP = () => hp;

  const isSunk = () => hp === 0;

  const hit = () => {
    hp -= 1;
  };

  return { getLength, getHP, isSunk, hit };
};

const gameboardFactory = () => {
  const board = new Array(10);
  for (let i = 0; i < board.length; i += 1)
    board[i] = ["", "", "", "", "", "", "", "", "", ""];
  const getBoard = () => board;

  const isEnoughRoom = (length, row, col, direction) => {
    if (direction === "x") {
      return length <= 9 - col + 1;
    }
    return length <= 9 - row + 1;
  };

  const validCoordinate = (row, col) =>
    row >= 0 && row <= 9 && col >= 0 && col <= 9;

  const placeShip = (ship, row, col, direction) => {
    const shipLength = ship.getLength();
    if (shipLength < 1) return;
    if (shipLength === 1) return (board[row][col] = ship);
    if (!validCoordinate(row, col)) return;

    const thereIsEnoughRoom = isEnoughRoom(shipLength, row, col, direction);
    if (!thereIsEnoughRoom) return;

    switch (direction) {
      case "x":
        {
          for (let i = col; i < col + ship.getLength(); i += 1) {
            board[row][i] = ship;
          }
        }
        break;
      case "y": {
        for (let i = row; i < row + ship.getLength(); i += 1) {
          board[i][col] = ship;
        }
      }
    }
  };

  const receiveAttack = (row, col) => {
    if (validCoordinate(row, col) && typeof board[row][col] === "object") {
      board[row][col].hit();
    } else board[row][col] = "x";
  };

  const allSunk = () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (typeof board[i][j] === "object" && board[i][j].isSunk() === false)
          return false;
      }
    }
    return true;
  };

  return { getBoard, placeShip, receiveAttack, allSunk };
};

export { shipFactory, gameboardFactory };
