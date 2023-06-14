let firstPlayerX = 635;
let firstPlayerY = 818;
let pawnMoveDistance = 80;


function createPawns() {
  fill("blue");
  circle(firstPlayerX, firstPlayerY, 40);

  fill("red");
  circle(555, 88, 40);
}

function movePawn() {
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
