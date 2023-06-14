class Fence {
  constructor() {
    totalBoardFences = [];
  }
  
  initFence() {
    for (let i = 0; i < this.columns; i++)
      for (let j = 0; j < this.rows; j++) {
        let fence = {
          x: 1050,
          y: this.rows * j * this.spacing + 60,
          width: 100,
          height: 20,
          color: color("black"),
        };

        this.totalBoardFences.push(fence);
      }
  }

  createFence() {
    for (let i = 0; i < this.totalBoardFences.length; i++) {
      let fence = this.totalBoardFences[i];
      fill(fence.color);
      rect(fence.x, fence.y, fence.width, fence.height);
    }
  }
}
