const numRows = prompt("How many squares?");

for (let i = 0; i < numRows; i++) {
  const containerDiv = document.querySelector(".container");
  const newRow = document.createElement("div");
  newRow.className = `row-${i} row`;
  containerDiv.appendChild(newRow);

  for (let j = 0; j < numRows; j++) {
    const rowDiv = document.querySelector(`.row-${i}`);
    const newTile = document.createElement("div");
    newTile.className = `tile`;
    rowDiv.appendChild(newTile);
    console.log(`new tile ${j}`);
  }
}

const tiles = document.querySelectorAll(".tile");

tiles.forEach((tile, index) =>
  tile.addEventListener("mouseover", function () {
    tile.classList.add("colored");
  })
);
