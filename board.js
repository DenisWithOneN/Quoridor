let columns = 9;
let rows = 9;
let spacing = 9;
let boardMargin = 10;
let totalBoardSquares = [];
let totalBoardRectangles = [];

function initSquares() {
  for (let i = 0; i <= columns; i++)
    for (let j = 0; j <= rows; j++) {

      let boardSquare = {
        x: columns * i * spacing + 200,
        y: rows * j * spacing + 60,
        size: 60,
        color: color("#B4CFB0"),
      };

      let leftBoardRectangle = {
        x: 40,
        y: rows * j * spacing + 60,
        width: 100,
        height: 50,
        color: color("#B4CFB0"),
      };

      let rightBoardRectangle = {
        x: 1050,
        y: rows * j * spacing + 60,
        width: 100,
        height: 50,
        color: color("#B4CFB0"),
      };

      totalBoardSquares.push(boardSquare);
      totalBoardRectangles.push(leftBoardRectangle, rightBoardRectangle);
    }
}

function createSquares() {

    
  for (let i = 0; i < totalBoardSquares.length; i++) {
    let boardSquare = totalBoardSquares[i];
    fill(boardSquare.color); 
    square(boardSquare.x, boardSquare.y, boardSquare.size);
  }

  for (let j = 0; j < totalBoardRectangles.length; j++) {
    let leftBoardRectangle = totalBoardRectangles[j];
    let rightBoardRectangle = totalBoardRectangles[j];
    fill(leftBoardRectangle.color);
    rect(
      leftBoardRectangle.x,
      leftBoardRectangle.y,
      leftBoardRectangle.width,
      leftBoardRectangle.height
    );
    rect(
      rightBoardRectangle.x,
      rightBoardRectangle.y,
      rightBoardRectangle.width,
      rightBoardRectangle.height
    );
  }

}

// interactive

function mouseClicked() {
    for (let i = 0; i < totalBoardSquares.length; i++) {
      let boardSquare = totalBoardSquares[i];
      if (mouseX > boardSquare.x && mouseX < boardSquare.x + boardSquare.size && mouseY > boardSquare.y && mouseY < boardSquare.y + boardSquare.size) {
        // change color of the square
        boardSquare.color = color("#E5E3C9");
      }
    }
  }

  function resetColors() {
    for (let i = 0; i < totalBoardSquares.length; i++) {
      let boardSquare = totalBoardSquares[i];
      boardSquare.color = color("#B4CFB0");
    }
  }
