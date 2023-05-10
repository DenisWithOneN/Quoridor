let columns = 9;
let rows = 9;
let spacing = 7;
let boardMargin = 10;
let totalBoardSquares = [];
let totalBoardRectangles = [];

function initSquares() {

    for(let i =0; i<=columns; i++)
        for(let j = 0; j<=rows; j++){

            let boardSquare = {
                x: columns * i * spacing + 165,
                y: rows * j * spacing + 60,
                size: 50,
                color: color("#00FFCA"),
            };

            let leftBoardRectangle = {
                x: 40,
                y: rows * j * spacing + 60,
                width: 100,
                height: 50,
                color: color("#00FFCA"),
            };

            let rightBoardRectangle = {
                x: 810,
                y: rows * j * spacing + 60,
                width: 100,
                height: 50,
                color: color("#00FFCA"),
            };

            totalBoardSquares.push(boardSquare);
            totalBoardRectangles.push(leftBoardRectangle, rightBoardRectangle);

        }
}

function createSquares() {

    for(let i=0; i<totalBoardSquares.length; i ++){
        let boardSquare = totalBoardSquares[i];
        fill(boardSquare.color)
        square(boardSquare.x, boardSquare.y, boardSquare.size);

    }

    for(let j=0; j<totalBoardRectangles.length; j++){
    let leftBoardRectangle = totalBoardRectangles[j];
    let rightBoardRectangle = totalBoardRectangles[j];
    fill(leftBoardRectangle.color);
    rect(leftBoardRectangle.x, leftBoardRectangle.y, leftBoardRectangle.width, leftBoardRectangle.height);
    rect(rightBoardRectangle.x, rightBoardRectangle.y, rightBoardRectangle.width, rightBoardRectangle.height)
}
}