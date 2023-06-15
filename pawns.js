class Pawn {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.pawnMoveDistance = 90;
  }

  show() {
    fill(this.color);
    circle(this.x, this.y, 50);
  }

  move() {
    if (this.color === "#F2E7C9") { //playerOne (down side)
      if (
        keyCode === UP_ARROW &&
        !keyIsDown(LEFT_ARROW) &&
        !keyIsDown(RIGHT_ARROW)
      ) {
        // this.y -= this.pawnMoveDistance;
        let newYUp = this.y - this.pawnMoveDistance;
        if(newYUp >= canvasHeight - (canvasHeight - 60)) {
          this.y = newYUp;
          if(this.y <= canvasHeight - (canvasHeight - 130) ){
            alert('Player One won!');
          }
          
        }
        
      }

      if (
        keyCode === DOWN_ARROW &&
        !keyIsDown(LEFT_ARROW) &&
        !keyIsDown(RIGHT_ARROW)
      ) {

        let newYDown = this.y + this.pawnMoveDistance;
        if(newYDown <= canvasHeight - 60) {
          this.y = newYDown;
        }
      }

      if (
        keyCode === LEFT_ARROW &&
        !keyIsDown(UP_ARROW) &&
        !keyIsDown(DOWN_ARROW)
      ) {
        
        let newXLeft = this.x - this.pawnMoveDistance;
        if(newXLeft >= canvasWidth - (canvasWidth - 200)){
          this.x = newXLeft;
        }
      }

      if (
        keyCode === RIGHT_ARROW &&
        !keyIsDown(UP_ARROW) &&
        !keyIsDown(DOWN_ARROW)
      ) {
        // this.x += this.pawnMoveDistance;

        let newXRight = this.x + this.pawnMoveDistance;
        if(newXRight <= canvasWidth - 200){
          this.x = newXRight;
        }
      }
    } else if (this.color === "#576A6B") { //playerTwo (up side)

      //move up
      if (
        keyIsDown(87) && // W key
        !keyIsDown(65) && // A key
        !keyIsDown(68) // D key
      ) {
        
        
      }

      //move down
      if ( 
        keyIsDown(83) && // S key
        !keyIsDown(65) && // A key
        !keyIsDown(68) // D key
      ) {

        let newYDown = this.y + this.pawnMoveDistance;
        if(newYDown <= canvasHeight - 60) {
          this.y = newYDown;
          if(this.y >= canvasHeight - 130){
            alert('Player Two won!');
          }
        }
      }

      //move left
      if (
        keyIsDown(65) && // A key
        !keyIsDown(87) && // W key
        !keyIsDown(83) // S key
      ) {
        this.x -= this.pawnMoveDistance;
      }

      //move right
      if (
        keyIsDown(68) && // D key
        !keyIsDown(87) && // W key
        !keyIsDown(83) // S key
      ) {
        let newXRight = this.x + this.pawnMoveDistance;
        if(newXRight <= canvasWidth - 200){
          this.x = newXRight;
        }
      }
    }
  }
}

let firstPlayerPawn = new Pawn(590, 810, "#F2E7C9");
let secondPlayerPawn = new Pawn(590, 90, "#576A6B");

function createPawns() {
  firstPlayerPawn.show();
  secondPlayerPawn.show();
}

function movePawns() {
  firstPlayerPawn.move();
  secondPlayerPawn.move();
}
