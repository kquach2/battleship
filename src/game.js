const gameIsOver = (board1, board2) => board1.allSunk() || board2.allSunk();

export { gameIsOver };
