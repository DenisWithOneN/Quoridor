let firstPlayerX = 635;
let firstPlayerY = 818;
let secondPlayerX = 555;
let secondPlayerY = 88;
let pawnMoveDistance = 80;


function createPawns() {
  fill("blue");
  circle(firstPlayerX, firstPlayerY, 40);

  fill("red");
  circle(secondPlayerX, secondPlayerY, 40);
}

function moveFirstPlayerPawn() {
  if (keyCode === UP_ARROW) {
    firstPlayerY -= pawnMoveDistance;
  }

  if (keyCode === DOWN_ARROW) {
    firstPlayerY += pawnMoveDistance;  
  }

  if (keyCode === LEFT_ARROW) {
    firstPlayerX -= pawnMoveDistance;
  }

  if (keyCode === RIGHT_ARROW) {
    firstPlayerX += pawnMoveDistance;
  }
}

function moveSecondPlayerPawn() {
    if (keyIsDown(87)) {
        console.log("test") // W key
        secondPlayerY -= pawnMoveDistance;
      }
    
      if (keyIsDown(83)) { // S key
        secondPlayerY += pawnMoveDistance;  
      }
    
      if (keyIsDown(65)) { // A key
        secondPlayerX -= pawnMoveDistance;
      }
    
      if (keyIsDown(68)) { //D key
        secondPlayerX += pawnMoveDistance;
      }
}
