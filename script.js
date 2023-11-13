class Knight{
    constructor(square, prev = null){
        this.prev = prev;
        this.square = square;
        this.next = [];
    }
}

class Gameboard{
    constructor(knight){
        this.root = knight;
    }

    calculatePossibleMoves(knight){
        if (knight.square[0] - 2 >= 0 && knight.square[1] - 1 >= 0){
            knight.next.push(new Knight([knight.square[0] - 2, knight.square[1] - 1], knight));
        }
    
        if (knight.square[0] - 1 >= 0 && knight.square[1] - 2 >= 0){
            knight.next.push(new Knight([knight.square[0] - 1, knight.square[1] - 2], knight));
        }
    
        if (knight.square[0] - 2 >= 0 && knight.square[1] + 1 <= 7){
            knight.next.push(new Knight([knight.square[0] - 2, knight.square[1] + 1], knight));
        }
    
        if (knight.square[0] + 1 <= 7 && knight.square[1] - 2 >= 0){
            knight.next.push(new Knight([knight.square[0] + 1, knight.square[1] - 2], knight));
        }
    
        if (knight.square[0] - 1 >= 0 && knight.square[1] + 2 <= 7){
            knight.next.push(new Knight([knight.square[0] - 1, knight.square[1] + 2], knight));
        }
    
        if (knight.square[0] + 2 <= 7 && knight.square[1] - 1 >= 0){
            knight.next.push(new Knight([knight.square[0] + 2, knight.square[1] - 1], knight));
        }
        
        if (knight.square[0] + 1 <= 7 && knight.square[1] + 2 <= 7){
            knight.next.push(new Knight([knight.square[0] + 1, knight.square[1] + 2], knight));
        }
        
        if (knight.square[0] + 2 <= 7 && knight.square[1] + 1 <= 7){
            knight.next.push(new Knight([knight.square[0] + 2, knight.square[1] + 1], knight));
        }
        return knight;
    }

    breadthFirstSearch(square){
        let Q = [this.root];
        while(Q.length !== 0){
            let current = Q[0];
            if (current.square[0] === square[0] && 
                current.square[1] === square[1]) return current;
            Q = [...Q, ...this.calculatePossibleMoves(current).next];
            Q.shift();
        }
    }
}


function knightMoves(start, end){
    let gameboard = new Gameboard(new Knight(start));
    let node = gameboard.breadthFirstSearch(end);
    let route = [];
    while(node !== null){
        route.push(node.square);
        node = node.prev;
    }
    return route.reverse();
}

let route = knightMoves([3,3],[4,3]);

console.log(`You made it in ${route.length - 1} moves! \nHere's your path:`, JSON.stringify(route));