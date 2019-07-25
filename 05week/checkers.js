'use strict';

var colors = require('colors');
// Initial commit
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Checker {
  constructor(color) {
    if (color == 'red') {
      this.name = 'red';
      this.symbol = 'r';
    } else if (color == 'black') {
      this.name = 'black';
      this.symbol = 'b';
    }
  }
}

const redChecker = new Checker('red');
const blackChecker = new Checker('black');

class Board {
  constructor() {
    this.grid = []
    this.checkers = [];
    this.redPiece = 'R';
    this.blackPiece = 'B';
    this.playerTurn = this.blackPiece;
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          // rowOfCheckers.push(this.grid[row][column].symbol);
          rowOfCheckers.push(this.grid[row][column])
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }
  initializeGrid() {
    for(let row1 = 0; row1 < 3; row1 ++) {
      for(let col1 = 0; col1 < 8; col1 ++) {
        if(col1 % 2 === 1 && row1 % 2 === 0) {
          this.grid[row1][col1] = this.redPiece;
          this.checkers.push(this.redPiece);
        }
        else if(col1 % 2 === 0 && row1 % 2 === 1) {
          this.grid[row1][col1] = this.redPiece;
          this.checkers.push(this.redPiece);
        }
      } 
    }
  }  
}




class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.initializeGrid();
  }
}


// Do not modify this
function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

// Runs first
const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
