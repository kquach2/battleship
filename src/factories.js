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

  const verticalOverlap = (length, coordinates) => {
    for (let i = coordinates[0]; i < coordinates[0] + length; i += 1) {
      if (typeof board[i][coordinates[1]] === "object") return true;
    }
    return false;
  };

  const horizontalOverlap = (length, coordinates) => {
    for (let i = coordinates[1]; i < coordinates[1] + length; i += 1) {
      if (typeof board[coordinates[0]][i] === "object") return true;
    }
    return false;
  };

  const isEnoughRoom = (length, coordinates, direction) => {
    const row = coordinates[0];
    const col = coordinates[1];
    if (direction === "x") {
      return length <= 9 - col + 1 && !horizontalOverlap(length, coordinates);
    }
    return length <= 9 - row + 1 && !verticalOverlap(length, coordinates);
  };

  const validCoordinates = (coordinates) => {
    const row = coordinates[0];
    const col = coordinates[1];
    return row >= 0 && row <= 9 && col >= 0 && col <= 9;
  };

  const placeShip = (ship, coordinates, direction) => {
    const shipLength = ship.getLength();
    const row = coordinates[0];
    const col = coordinates[1];
    if (shipLength < 1) return "fail";
    if (shipLength === 1) {
      board[row][col] = ship;
      return "success";
    }
    if (!validCoordinates(coordinates)) return "fail";

    const thereIsEnoughRoom = isEnoughRoom(shipLength, coordinates, direction);
    if (!thereIsEnoughRoom) return "fail";

    switch (direction) {
      case "x":
        {
          for (let i = col; i < col + ship.getLength(); i += 1) {
            board[row][i] = ship;
          }
          return "success";
        }
        break;
      case "y": {
        for (let i = row; i < row + ship.getLength(); i += 1) {
          board[i][col] = ship;
        }
        return "success";
      }
    }
  };

  const receiveAttack = (coordinates) => {
    const row = coordinates[0];
    const col = coordinates[1];
    if (validCoordinates(coordinates) && typeof board[row][col] === "object") {
      board[row][col].hit();
      return "hit";
    }
    return "miss";
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

const playerFactory = (type, name) => {
  const gameBoard = gameboardFactory();
  if (type === "computer") {
    const unattackedCoordinates = [];
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        unattackedCoordinates.push([i, j]);
      }
    }

    const getRandomCoordinates = () =>
      unattackedCoordinates[
        Math.floor(Math.random() * unattackedCoordinates.length)
      ];

    const updateUnattackedCoordinates = (coordinates) => {
      const index = unattackedCoordinates.indexOf(coordinates);
      unattackedCoordinates.splice(index, 1);
    };

    const makeRandomPlay = (enemyBoard) => {
      const coordinates = getRandomCoordinates();
      updateUnattackedCoordinates(coordinates);
      return [enemyBoard.receiveAttack(coordinates), coordinates];
    };
    return { gameBoard, makeRandomPlay };
  }
  return {
    name,
    gameBoard,
    makePlay(enemyBoard, coordinates) {
      return enemyBoard.receiveAttack(coordinates);
    },
  };
};

export { shipFactory, gameboardFactory, playerFactory };
