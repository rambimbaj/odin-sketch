
for (i=0; i < 1023; i++) {
    const canvas = document.createElement('div');
    canvas.onmouseover = function () {
        canvas.style.backgroundColor = 'brown';
        }
    canvas.setAttribute('class', "canvasChild");
    canvasContainer.appendChild(canvas);
    }

