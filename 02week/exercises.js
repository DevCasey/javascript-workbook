// 1. Length
//      Create an array called 'cars' which consists of 4 different types of cars. The first car type should be 'Ford'.
//      Console.log the length of the array

let cars = ['Ford'];
console.log(cars.length);

// 2. Conct
//      Create another array called 'more cars' with 4 more different types of cars. The last car type should be 'Honda'.
//      Use the concat method to combine the 'cars' and 'moreCars' arrays into an array called 'totalCars'

let moreCars = ['Tesla', 'Toyota', 'VW', 'Honda'];
let totalCars = cars.concat(moreCars);
console.log(totalCars);

// 3. indexOf and listIndexOf
//      Use the indexOf method to console.log the index of 'Honda'.
//      Use the lastIndexOf method to console.log the index of 'Ford'.

console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Ford'));

// 4. Join
//      Use the join method to convert the array 'totalCars' into a string called 'stringOfCars'

totalCars = totalCars.join(' ');
let stringOfCars = totalCars
console.log(stringOfCars);


// 5. Split
//      Use the split method to convert stringOfCars back intro an array called 'totalCars'.

stringOfCars = stringOfCars.split(' ');
totalCars = stringOfCars;
console.log(totalCars);

// 6. Reverse
//      Use the reverse method to create an array 'carsInReverse' which is the array 'totalCars' in reverse. 

let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

// 7. Sort
//      Use the sort method to put the array 'carsInReverse into alphabetical order.
//      Based on the types of cars you used, predict which item in the array should be at index 0.
//      Use the following code to confirm or reject your prediciton:
//    alert(carsInReverse.indexOf('yourPrediction'));

carsInReverse = carsInReverse.sort();
console.log(carsInReverse);
// By learning the Alphabet I'm willing to bet that 'Ford' shows up as index 0. Just a hunch.

// 8. Slice
//      Use the slice method to remove 'Ford' and 'Honda' from the 'carsInReverse' array and move them into a new array called 'removedCars'.

let removedCars = carsInReverse.slice(0,2,);
console.log(removedCars);

// 9. Splice
//      Use the splice method to removed the 2nd and 3rd items in the array 'carsInReverse' and add 'Ford' and 'Honda' in their place.

carsInReverse.splice(2, 3, 'Ford', 'Honda');
console.log(carsInReverse);

// 10. Push
//      Use the push method to add the types of cars that you removed using the splice method to the 'carsInReverse' array.

carsInReverse.push(removedCars);
console.log(carsInReverse);
