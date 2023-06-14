let a = 635;
let b = 818;
let pawnMoveDistance = 5;


function createPawns() {
  fill("blue");
  circle(a, b, 40);

  fill("red");
  circle(555, 88, 40);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    b -= pawnMoveDistance;
  }

  if (keyCode === DOWN_ARROW) {
    b += pawnMoveDistance;  
  }

  if (keyCode === LEFT_ARROW) {
    a -= pawnMoveDistance;
  }

  if (keyCode === RIGHT_ARROW) {
    a+= pawnMoveDistance;
  }
}
