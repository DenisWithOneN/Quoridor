let quoridorBoard;

function setup() {
  canvas = createCanvas(1200, 900);
  quoridorBoard = new Board(9,9,9,10);
  quoridorBoard.initSquares;
  playerNameInput = document.querySelector('#playerName');
}

function draw() {
  background("#789395");
  createSquares();
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
