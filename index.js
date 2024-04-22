document.querySelector("button").addEventListener("click", function () {
  let numRows = parseInt(prompt("Enter a grid size between 1-100:"));

  while (!numRows || numRows > 100 || numRows < 1) {
    numRows = parseInt(prompt("Enter a grid size between 1-100:"));
  }

  createGrid(numRows);
});

const createGrid = function (numRows = 10) {
  // Variables
  const containerDiv = document.querySelector(".container");

  // Drop previous Grid
  containerDiv.innerHTML = "";

  // Create numRows # of rows
  for (let i = 0; i < numRows; i++) {
    const newRow = document.createElement("div");
    newRow.className = `row-${i} row`;
    containerDiv.appendChild(newRow);

    // Create numRows # of tiles within each row
    for (let j = 0; j < numRows; j++) {
      const rowDiv = document.querySelector(`.row-${i}`);
      const newTile = document.createElement("div");
      newTile.className = `tile`;
      rowDiv.appendChild(newTile);
    }
  }

  // Add Event Listeners to every tile to identify when the tile is moused over
  const tiles = document.querySelectorAll(".tile");

  tiles.forEach((tile, index) =>
    tile.addEventListener("mouseover", function () {
      tile.classList.add("colored");
    })
  );
};

createGrid();
