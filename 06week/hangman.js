
// // split string into an array
// // count how manay characters in string
// // display underscores for each character
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let counter = 0;
// let solution = 'horse';
// let newArr = [];

// function getPrompt() {
//     let splitSolution = solution.split(' ');
//     function hangman(word) {
//         for(let i = 1; i < word.length; i++) {
//             counter++
//             do {
//                 newArr.push("_");
//             } while (newArr.length <= counter);
//         }
//         let converted = newArr.join(' ');
//         console.log(converted);
//     }


//     rl.question('Enter a letter: ', (guessedLetter) => {
//         let splitLetter = guessedLetter.split('');
//         while (true) {
//             // Iterating through the guessed letter, even though it's only one character
//             for (let j = 0; j < splitLetter.length; j++) {
//                 // Iterating through the solution
//                 for (let i = 0; i < splitSolution.length; i++) {
//                     // If the guessed letter is in the solution
//                     if (splitSolution[i].includes(splitLetter[j])) {
//                         // Getting the index of the guessed letter that is in the solution
//                         let correctLetterIndex = splitSolution.indexOf(i);
//                         // Swapping the underscore with the guessed letter at the index that is above ^.
//                         for(let n = 0; n < newArr.length; n++) {
//                             newArr.splice(0, correctLetterIndex, j)
//                         }
//                     }
//                 }
                
//             }
            
//         }

        















      
//       getPrompt();
//     });
//     hangman(solution);
//   }

  





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



// getPrompt();
// hangman(guess);









let counter = 0;
let solution = 'horse';
let newArr = [];

function hangman(word) {
    for(let i = 1; i < word.length; i++) {
        counter++
        do {
            newArr.push("_");
        } while (newArr.length <= counter);
    }
    let converted = newArr.join(' ');
    console.log(converted);
}




let checkLetter = (guessedLetter) => {
  let splitLetter = guessedLetter.split('');
  let splitSolution = solution.split('');
  for (let j = 0; j < splitLetter.length; j++) {
    for (let i = 0; i < splitSolution.length; i++) {
      if (splitSolution[i].includes(splitLetter[j])) {
        let correctLetterIndex = splitSolution.indexOf(splitSolution[i]);
        newArr.splice(correctLetterIndex, 1, splitLetter[j]);
        
        console.log(newArr);
      }
    }
  }
  
}
hangman(solution);
checkLetter('h');

