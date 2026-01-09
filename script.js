
//switchPlayer method
Gameboard.prototype.switchPlayer = function () {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    console.log("Switched player to " + this.currentPlayer);
    return;
}

//checkTie method
Gameboard.prototype.checkTie = function () {
    return !this.board.includes(" ");
}

//printBoard method
Gameboard.prototype.printBoard = function () {
    console.log(this.board[0] + " | " + this.board[1] + " | " + this.board[2]);
    console.log("----------")
    console.log(this.board[3] + " | " + this.board[4] + " | " + this.board[5]);
    console.log("----------")
    console.log(this.board[6] + " | " + this.board[7] + " | " + this.board[8]);
};

// makemove method
Gameboard.prototype.playTurn = function (position) {
    if (this.board[position] === " ") {
        this.board[position] = this.currentPlayer;
        return true;
    } else {
        console.log("The position is already taken.")
        return false;
    }
};

//checkWinner method 
Gameboard.prototype.checkWinner = function () {
    const patterns = [
        [0, 1, 2], // horizontal
        [3, 4, 5], // horizontal
        [6, 7, 8], // horizontal
        [0, 3, 6], // vertical
        [1, 4, 7], // vertical
        [2, 5, 8], // vertical
        [0, 4, 8], // cross
        [2, 4, 6]  // cross
    ];
    for (let pattern of patterns) {
        if (pattern.every(index => this.board[index] === this.currentPlayer)) {
            return true;
        }
    }
    return false;
}

Gameboard.prototype.handleTurn = function (position) {
    if (!this.playTurn(position)) return;

    this.printBoard();

    if (this.checkWinner()) {
        console.log(`player ${this.currentPlayer} wins!`)
        return;
    }

    if (this.checkTie()) {
        console.log("It's a tie!")
        return;
    }

    this.switchPlayer();
}

// main function
function Gameboard() {
    this.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    this.currentPlayer = 'X';



    this.handleTurn();

}



// func call 
let x = new Gameboard();
x.handleTurn(1);
