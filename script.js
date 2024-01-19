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
    canvasRow.style.width = `calc(100% / ${size}`;
    canvasRow.style.height = `calc(100% / ${size}`;
    canvasRow.onmouseover = function () {
      canvasRow.style.backgroundColor = randomColor();
      let rowOpacity = Number(canvasRow.style.opacity);
      canvasRow.style.opacity = rowOpacity + 0.1;
      return canvasRow;
    };
    canvasContainer.appendChild(canvasRow);
  }
  for (k = 1; k <= size; k++) {
    const canvasColumn = document.createElement("div");
    canvasColumn.setAttribute("class", "canvasColumn");
    canvasColumn.style.width = `calc(100% / ${size}`;
    canvasColumn.style.height = `calc(100% / ${size}`;
    canvasColumn.onmouseover = function () {
      canvasColumn.style.backgroundColor = randomColor();
      let columnOpacity = Number(canvasColumn.style.opacity);
      canvasColumn.style.opacity = columnOpacity + 0.1;
      return canvasColumn;
    };
    canvasContainer.appendChild(canvasColumn);
  }
}
function changeSize() {
  let size = prompt("What size shall it be?", 16);
  if (size > 1000 || size < 0) {
    return prompt("0-1000 only!");
  }
  return size;
}
document.getElementById("canvasSize").addEventListener("click", changeSize);
createCanvas(changeSize());
