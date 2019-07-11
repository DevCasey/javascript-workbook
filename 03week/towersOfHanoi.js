'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Arguments that are getting passed in are the properties in the stacks object
function movePiece(startingStack, endingStack) {
  // endPiece is create to remove the last element in the array.
  let endPiece = stacks[startingStack].pop();

  // then endPiece is pushed into the second stack that is chosen.
  stacks[endingStack].push(endPiece);


}

function isLegal(startingStack, endingStack) {
  // Variables are created to always grab the last element in the array.
  let starting = stacks[startingStack].length - 1;
  let ending = stacks[endingStack].length - 1;

  // Conditional that checks if the stack the player wants to move to is empty or if the moving piece has a lower value than where it's getting placed.
  if (stacks[endingStack].length == 0 || stacks[startingStack][starting] < stacks[endingStack][ending]) {
    // If above is true, call the movePiece function.
    movePiece(startingStack, endingStack);
    return true;
  } else {
    return false;
  }
}

function checkForWin() {
  // Your code here

  // Checks if the stack has all 4 pieces
  if (stacks.b.length == 4) {
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startingStack, endingStack) {
  // Calls the isLegal function and passes whatever arguements are passed in when the towersOfHanoi function is called. 
  isLegal(startingStack, endingStack);

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
