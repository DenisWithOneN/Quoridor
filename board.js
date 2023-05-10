let columns = 9;
let rows = 9;
let spacing = 7;
let totalBoardSquares = [];

function initSquares() {

    for(let i =0; i<=columns; i++)
        for(let j = 0; j<=rows; j++){

            let boardSquare = {
                x: columns * i * spacing + 20,
                y: rows * j * spacing + 20,
                size: 50,
                color: color("#00FFCA")
            };

            totalBoardSquares.push(boardSquare);

        }
}

function createSquares() {

    for(let i=0; i<totalBoardSquares.length; i ++){
        let boardSquare = totalBoardSquares[i];
        fill(boardSquare.color)
        square(boardSquare.x, boardSquare.y, boardSquare.size);

    }
}