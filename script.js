function createCanvas(size) {
  function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  for (i = 0; i < size; i++) {
    const canvasRow = document.createElement("div");
    canvasRow.setAttribute("class", "canvasRow");
    canvasRow.onmouseover = function () {
      canvasRow.style.backgroundColor = randomColor();
    };
    canvasContainer.appendChild(canvasRow);
  }
  for (k = 1; k <= size; k++) {
    const canvasColumn = document.createElement("div");
    canvasColumn.setAttribute("class", "canvasColumn");
    canvasColumn.onmouseover = function () {
      canvasColumn.style.backgroundColor = randomColor();
    };
    canvasContainer.appendChild(canvasColumn);
  }
}
createCanvas(5);
