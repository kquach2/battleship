const initialLoad = () => {
  const userGrid = document.querySelector("#user-grid");
  const computerGrid = document.querySelector("#computer-grid");
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const cell = document.createElement("div");
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.classList.add("cell");
      userGrid.appendChild(cell);
    }
  }
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const cell = document.createElement("div");
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.classList.add("cell");
      computerGrid.appendChild(cell);
    }
  }
};

export default initialLoad;
