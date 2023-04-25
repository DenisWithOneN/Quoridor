function setup() {
    canvas = createCanvas(580, 500);
    background(100);
    let canvasX = (windowWidth - width) / 2;
    let canvasY = (windowHeight - height) / 2;
    canvas.position(canvasX, canvasY);
  }