function Gameboard() {
    this.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    this.currentPlayer = 'X';

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






// func call 
let x = new Gameboard();
x.printBoard();
