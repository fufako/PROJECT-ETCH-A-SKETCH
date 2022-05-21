const DEFAULT_SIZE = 16
const DEFAULT_MODE = "color"
const DEFAULT_COLOR = "black"

let currentMode = DEFAULT_MODE
let currentColor = DEFAULT_COLOR

function setCurrentColor(newColor) {
  currentColor = newColor
  colorChanger.style.backgroundColor = newColor
}

function setCurrentMode(newMode) {
  currentMode = newMode
  if (newMode === "color") {
    colorBtn.style.backgroundColor = "#fffaf0"
    rainbowBtn.style.backgroundColor = "#fff8dc"
    eraseBtn.style.backgroundColor = "#fff8dc"
  } else if (newMode === "rainbow") {
    rainbowBtn.style.backgroundColor = "#fffaf0"
    eraseBtn.style.backgroundColor = "#fff8dc"
    colorBtn.style.backgroundColor = "#fff8dc"
  } else if (newMode === "erase") {
    eraseBtn.style.backgroundColor = "#fffaf0"
    colorBtn.style.backgroundColor = "#fff8dc"
    rainbowBtn.style.backgroundColor = "#fff8dc"
  }
}

const grid = document.getElementById("grid")
const size = document.getElementById("sizeChange")
const showSize = document.getElementById("showSize")
const colorChanger = document.getElementById("colorChanger")
const colorBtn = document.getElementById("color")
const rainbowBtn = document.getElementById("rainbow")
const eraseBtn = document.getElementById("erase")
const clearBtn = document.getElementById("clear")

size.onchange = (e) => changeSize(e.target.value)
colorChanger.onchange = (e) => setCurrentColor(e.target.value)
colorBtn.onclick = (e) => setCurrentMode(e.target.id)
rainbowBtn.onclick = (e) => setCurrentMode(e.target.id)
eraseBtn.onclick = (e) => setCurrentMode(e.target.id)
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
function changeSize(size) {
  updateShowSize()
  createGrid(size)
}
function updateShowSize() {
  showSize.textContent = size.value + " x " + size.value
}

function changeColor(e) {
  if (currentMode === "color") {
    e.target.style.backgroundColor = currentColor
  } else if (currentMode === "rainbow") {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor =
      "rgb(" + randomR + ", " + randomG + ", " + randomB + ")"
  } else if (currentMode === "erase") {
    e.target.style.backgroundColor = "#fffaf0"
  }
}

window.onload = () => {
  createGrid(DEFAULT_SIZE)
}
