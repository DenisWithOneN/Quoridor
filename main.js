function setup() {
  canvas = createCanvas(1200, 900);
  let canvasX = (windowWidth - width) / 2;
  let canvasY = (windowHeight - height) / 2;
  canvas.position(canvasX, canvasY);
  initSquares();
  playerNameInput = document.querySelector('#playerName');
}

function draw() {
  background("#789395");
  createSquares();
  createPawns();
  keyPressed();
  
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function updatePlayerName() {
  let playerName = playerNameInput.value;
  let playerNameDisplay = document.getElementById("playerNameDisplay");
  playerNameDisplay.innerHTML = playerName;
}
