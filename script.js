const DEFAULT_SIZE = 16

const grid = document.getElementById("grid")
const size = document.getElementById("sizeChange")
const clearBtn = document.getElementById("clear")
size.onchange = (e) => createGrid(e.target.value)
clearBtn.onclick = () => reloadGrid()

function createGrid(size) {
  clearGrid()
  grid.style.gridTemplateColumns = "repeat(" + size + ", 1fr)"
  grid.style.gridTemplateRows = "repeat(" + size + ", 1fr)"
  for (let i = 0; i <= size * size; i++) {
    const gridItem = document.createElement("div")
    gridItem.classList.add("grid-item")
    gridItem.addEventListener("mouseover", changeColor)
    grid.appendChild(gridItem)
  }
}
function reloadGrid() {
  clearGrid()
  createGrid(size.value)
}
function clearGrid() {
  grid.innerHTML = ""
}

function changeColor(e) {
  e.target.style.backgroundColor = "black"
}

window.onload = () => {
  createGrid(DEFAULT_SIZE)
}
