export default class Board {
    constructor(state = null,depth = 0) {
        this.winner = false;
        if(!state) this.board = [0,0,0,0,0,0,0,0,0];
        else this.board = state;
        this.winner = this.isWinner(state);
        this.depth = depth;
    }
    evaluate() {
        if(this.winner) {
            return 100 - this.depth;
        }
    }
    isWinner(board) {
        const win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 5, 6],
            [2, 4, 6],
          ];
          let winner = "";
          win.forEach((arr) => {
            let x = 0;
            let o = 0;
     
            arr.forEach((index) => {
              if (board[index] === 1) {
                x++;
              } else if (board[index] === 2) {
                o++;
              }
            });
            if (x === 3) {
              winner = "X";
            }
            if (o === 3) {
              winner = "O";
            }
          });
          return winner;
    }
    isMovesLeft() {
        for(let i of this.board){
            if(i === 0){
                return true;
            }
        }
        return false;
    }
    
}