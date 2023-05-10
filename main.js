function setup() {
    canvas = createCanvas(950, 750);
    let canvasX = (windowWidth - width) / 2;
    let canvasY = (windowHeight - height) / 2;
    canvas.position(canvasX, canvasY);

    initSquares();
}

function draw() {
  background('#088395');
  createSquares();


}



