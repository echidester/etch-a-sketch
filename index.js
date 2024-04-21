for (let i = 0; i < 16; i++) {
  const newDiv = document.createElement("div");
  newDiv.className = `${i + 1} tile`;
  const containerDiv = document.querySelector(".container");

  containerDiv.appendChild(newDiv);
}

const tiles = document.querySelectorAll(".tile");

tiles.forEach((tile, index) =>
  tile.addEventListener("mouseover", function () {
    tile.classList.add("colored");
  })
);
