let quoridorBoard;

function setup() {
  canvas = createCanvas(1200, 900);
  playerNameInput = document.querySelector('#playerName');
  quoridorBoard = new Board(9,9,9,10);
  quoridorBoard.initSquares();
}

function draw() {
  background("#789395");
  quoridorBoard.createSquares();
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
