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
      if (this.color === "white") {
        if (keyCode === UP_ARROW) {
          this.y -= this.pawnMoveDistance;
        }
      
        if (keyCode === DOWN_ARROW) {
          this.y += this.pawnMoveDistance;  
        }
      
        if (keyCode === LEFT_ARROW) {
          this.x -= this.pawnMoveDistance;
        }
      
        if (keyCode === RIGHT_ARROW) {
          this.x += this.pawnMoveDistance;
        }
      } else if (this.color === "black") {
        if (keyIsDown(87)) { // W key
          this.y -= this.pawnMoveDistance;
        }
      
        if (keyIsDown(83)) { // S key
          this.y += this.pawnMoveDistance;  
        }
      
        if (keyIsDown(65)) { // A key
          this.x -= this.pawnMoveDistance;
        }
      
        if (keyIsDown(68)) { //D key
          this.x += this.pawnMoveDistance;
        }
      }
    }
  }
  
  let firstPlayerPawn = new Pawn(590, 810, "white");
  let secondPlayerPawn = new Pawn(590, 90, "black");
  
  function createPawns() {
    firstPlayerPawn.show();
    secondPlayerPawn.show();
  }
  
  function movePawns() {
    firstPlayerPawn.move();
    secondPlayerPawn.move();
  }