const btn = document.querySelector("#Btn");
const container = document.querySelector(".container");
const resetBtn = document.querySelector("#resetBtn");

createGrids();
clearGrids();

function clearGrids() {
  resetBtn.addEventListener("click", () => {
    let grids = document.querySelectorAll(".grid-div");
    grids.forEach((grid) => {
      if (grid.classList.contains("change-color")) {
        grid.classList.remove("change-color");
      }
    });
  });
}

function UserChoice() {
  return Number(prompt("Enter the size of the grid"));
}

function widthFind(Size) {
  return Math.ceil(960 / Size);
}

function createGrids() {
  let click = 0;
  btn.addEventListener("click", () => {
    if (click == 0) {
      console.log("Running for first time");
      container.innerHTML = "";
      let size = 16;
      let boxSize = widthFind(size);
      console.log(boxSize);
      for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-div");
        div.style.width = `${boxSize}px`;
        div.style.height = `${boxSize}px`;
        div.addEventListener("mouseover", () => {
          div.classList.add("change-color");
        });
        container.appendChild(div);
      }
      click = 1;
    } else {
      console.log("Running for second time");
      container.innerHTML = "";
      let size = UserChoice();
      let boxSize = widthFind(size);
      console.log(boxSize);
      for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-div");
        div.style.width = `${boxSize}px`;
        div.style.height = `${boxSize}px`;
        div.addEventListener("mouseover", () => {
          div.classList.add("change-color");
        });
        container.appendChild(div);
      }
    }
  });
}
