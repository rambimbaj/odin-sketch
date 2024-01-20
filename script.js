function createCanvas(size) {
  const clear = document.getElementById("canvasContainer");
  while (clear.hasChildNodes()) {
    clear.removeChild(clear.firstChild);
  }
  function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
  }
  for (i = 0; i < size ** 2; i++) {
    const canvas = document.createElement("div");
    canvas.setAttribute("class", "canvas");
    canvas.style.flexBasis = 600 / size + "px";
    canvas.onmouseover = function () {
      canvas.style.backgroundColor = randomColor();
      let canvasOpacity = Number(canvas.style.opacity);
      canvas.style.opacity = canvasOpacity + 0.1;
      return canvas;
    };
    canvasContainer.appendChild(canvas);
  }
}
function changeSize() {
  let size = prompt("What size shall it be? 0-100", 8);
  if (size > 100 || size < 0 || isNaN(size)) {
    return alert("0-100 only!");
  }
  return size;
}
