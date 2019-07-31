
// split string into an array
// count how manay characters in string
// display underscores for each character
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getPrompt() {
    rl.question('guess: ', (guess) => {
      getPrompt();
    });
    let hangman = (word) => {
        let counter = 0;
        let newArr= [];
        for(let i = 1; i < word.length; i++) {
            counter++
        }
        do {
            newArr.push("_");
        } while (newArr.length <= counter)
    }
    let converted = newArr.join(' ')
    console.log(converted)
  }





// let hangman = (word) => {
//   let counter = 0;
//   let newArr = [];
//   for(let i = 1; i < word.length; i++) {
//     counter++
//     do {
//       newArr.push("_");
//     } while (newArr.length <= counter)
//   }
//     let converted = newArr.join(' ');
//     console.log(converted);
// }



getPrompt();
// hangman(guess);

