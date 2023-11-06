class Knight{
    constructor(square){
        this.square = square;
        this.next = [];
    }
}

class Gameboard{
    constructor(knight){
        this.root = knight;
        this.board = this.createBoard(knight.square);
    }

    createBoard(square){
        let board = [];
        for (let i = 0; i < 8; i++){
            board.push(new Array(8));
        }
        board[square[0]][square[1]] = 'k';
        return board;
    }
}

function calculatePossibleMoves(knight){
    if (knight.square[0] - 2 >= 0 && knight.square[1] - 1 >= 0){
        knight.next.push(new Knight([knight.square[0] - 2, knight.square[1] - 1]));
    }

    if (knight.square[0] - 1 >= 0 && knight.square[1] - 2 >= 0){
        knight.next.push(new Knight([knight.square[0] - 1, knight.square[1] - 2]));
    }

    if (knight.square[0] - 2 >= 0 && knight.square[1] + 1 <= 7){
        knight.next.push(new Knight([knight.square[0] - 2, knight.square[1] + 1]));
    }

    if (knight.square[0] + 1 <= 7 && knight.square[1] - 2 >= 0){
        knight.next.push(new Knight([knight.square[0] + 1, knight.square[1] - 2]));
    }

    if (knight.square[0] - 1 >= 0 && knight.square[1] + 2 <= 7){
        knight.next.push(new Knight([knight.square[0] - 1, knight.square[1] + 2]));
    }

    if (knight.square[0] + 2 <= 7 && knight.square[1] - 1 >= 0){
        knight.next.push(new Knight([knight.square[0] + 2, knight.square[1] - 1]));
    }
    
    if (knight.square[0] + 1 <= 7 && knight.square[1] + 2 <= 7){
        knight.next.push(new Knight([knight.square[0] + 1, knight.square[1] + 2]));
    }
    
    if (knight.square[0] + 2 <= 7 && knight.square[1] + 1 <= 7){
        knight.next.push(new Knight([knight.square[0] + 2, knight.square[1] + 1]));
    }
    return knight;
}

let knight = new Knight([7, 4]);
let gameboard = new Gameboard(knight);

calculatePossibleMoves(knight);
console.log(knight.next);
