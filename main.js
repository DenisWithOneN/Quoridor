let quoridorBoard;
let canvasWidth = 1200;
let canvasHeight = 900;

function setup() {
  let canvasX = (windowWidth - canvasWidth) / 2;
  let canvasY = (windowHeight - canvasHeight) / 2;
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(canvasX, canvasY);
  playerNameInput = document.querySelector("#playerName");
  quoridorBoard = new Board(9, 9, 10, 10);
  quoridorBoard.initSquares();
  quoridorBoard.initFences();
}

function draw() {
  background("#789395");
  quoridorBoard.createSquares();
  quoridorBoard.createFences();
  createPawns();
}

function keyPressed() {
  movePawns();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function updatePlayerName() {
  let playerName = playerNameInput.value;
  let playerNameDisplay = document.getElementById("playerNameDisplay");
  playerNameDisplay.innerHTML = playerName;
}

function mousePressed() {
  quoridorBoard.mousePressed();
}

function mouseDragged() {
  quoridorBoard.mouseDragged();
}

function mouseReleased() {
  quoridorBoard.mouseReleased();
}
