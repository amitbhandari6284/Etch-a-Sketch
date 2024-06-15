const btn = document.querySelector("#Btn");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
  let size = Number(prompt("Enter the grid size"));
//   container.innerHTML = ""; // Clear the container
  container.style.setProperty("--grid-size", size);
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-div"); // Add a class to the div
    container.appendChild(div);
  }
});
