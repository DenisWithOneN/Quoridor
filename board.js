class Board {
  constructor(columns, rows, spacing, boardMargin) {
    this.columns = columns;
    this.rows = rows;
    this.spacing = spacing;
    this.boardMargin = boardMargin;
    this.totalBoardSquares = [];
    this.totalBoardRectangles = [];
  }

  initSquares() {
    for (let i = 0; i < this.columns; i++)
      for (let j = 0; j < this.rows; j++) {
        let boardSquare = {
          x: this.columns * i * this.spacing + 200,
          y: this.rows * j * this.spacing + 60,
          size: 60,
          color: color("#B4CFB0"),
        };

        let leftBoardRectangle = {
          x: 40,
          y: this.rows * j * this.spacing + 60,
          width: 100,
          height: 50,
          color: color("#B4CFB0"),
        };

        let rightBoardRectangle = {
          x: 1050,
          y: this.rows * j * this.spacing + 60,
          width: 100,
          height: 50,
          color: color("#B4CFB0"),
        };

        this.totalBoardSquares.push(boardSquare);
        this.totalBoardRectangles.push(leftBoardRectangle, rightBoardRectangle);
      }
  }

  createSquares() {
    for (let i = 0; i < this.totalBoardSquares.length; i++) {
      let boardSquare = this.totalBoardSquares[i];
      fill(boardSquare.color);
      square(boardSquare.x, boardSquare.y, boardSquare.size);
    }

    for (let j = 0; j < this.totalBoardRectangles.length; j++) {
      let leftBoardRectangle = this.totalBoardRectangles[j];
      let rightBoardRectangle = this.totalBoardRectangles[j];
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
}
