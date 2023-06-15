class Board {
  constructor(columns, rows, spacing, boardMargin) {
    this.columns = columns;
    this.rows = rows;
    this.spacing = spacing;
    this.boardMargin = boardMargin;
    this.totalBoardSquares = [];
    this.totalBoardRectangles = [];
    this.totalBoardFences = [];
    this.draggedFenceIndex = -1; // Track the index of the dragged fence this.draggedFenceIndex = -1; // Track the index of the dragged fence
    this.offsetX = 0; // Offset between the mouse and the fence's x-coordinate
    this.offsetY = 0; // Offset between the mouse and the fence's y-coordinate
  }

  initSquares() {
    for (let i = 0; i < this.columns; i++) {
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

  initFences() {
    for (let i = 0; i < this.columns; i++) {
      for (let j = 0; j <= this.rows; j++) {
        let playerOneFence = {
          x: 1010,
          y: this.rows * j * this.spacing + 25,
          width: 150,
          height: 30,
          color: color("#6F8777"),
          isDragged: false,
        };

        let playerTwoFence = {
          x: 30,
          y: this.rows * j * this.spacing + 25,
          width: 150,
          height: 30,
          color: color("#6F8777"),
          isDragged: false,
        };

        this.totalBoardFences.push(playerOneFence, playerTwoFence);
      }
    }
  }

  createFences() {
    for (let j = 1; j <= 20; j++) {
      let fence = this.totalBoardFences[j];
      fill(fence.color);
      rect(fence.x, fence.y, fence.width, fence.height);
    }
  }

  mousePressed() {
    for (let j = 0; j <= 20; j++) {
      let fence = this.totalBoardFences[j];
      if (
        //coordinates of the fence
        mouseX >= fence.x &&
        mouseX <= fence.x + fence.width &&
        mouseY >= fence.y &&
        mouseY <= fence.y + fence.height
      ) {
        this.draggedFenceIndex = j; // Store the index of the dragged fence
        console.log(j);
        this.offsetX = mouseX - fence.x; // Calculate the offset
        this.offsetY = mouseY - fence.y; // Calculate the offset
        break; // Exit the loop after finding the first fence
      }
    }
  }

  mouseDragged() {
    if (this.draggedFenceIndex !== -1) {
      let draggedFence = this.totalBoardFences[this.draggedFenceIndex];
      draggedFence.x = mouseX - this.offsetX; // Update the fence's x-coordinate based on the offset
      draggedFence.y = mouseY - this.offsetY; // Update the fence's y-coordinate based on the offset
    }
  }

  mouseReleased() {
    if (this.draggedFenceIndex !== -1) {
      let draggedFence = this.totalBoardFences[this.draggedFenceIndex];

      // Snap the fence's position to the nearest square
      let snappedX = Math.round(draggedFence.x / this.spacing) * this.spacing;
      let snappedY = Math.round(draggedFence.y / this.spacing) * this.spacing;

      // Update the fence's position
      draggedFence.x = snappedX;
      draggedFence.y = snappedY;
    }

    this.draggedFenceIndex = -1; // Reset the dragged fence index
  }

  rotate() {
    if (keyCode === 88) {
      if (this.draggedFenceIndex !== -1) {
        let draggedFence = this.totalBoardFences[this.draggedFenceIndex];

        // Calculate the mouse pointer position relative to the dragged fence
        let mousePointerX = mouseX - draggedFence.x;
        let mousePointerY = mouseY - draggedFence.y;

        // Rotate the fence's position
        let temp = draggedFence.width;
        draggedFence.width = draggedFence.height;
        draggedFence.height = temp;

        // Adjust the fence's x and y coordinates to rotate around the mouse pointer position
        draggedFence.x = mouseX + mousePointerX;
        draggedFence.y = mouseY - (draggedFence.width + mousePointerX);
      }
    }
  }
}




