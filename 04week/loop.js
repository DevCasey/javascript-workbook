// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i <= 100);

// let person = [{
//     firstName: "Jane",
//     lastName: "Doe",
//     birthDate: "Jan 5, 1925",
//     gender: "female"
// }]


// for (person.birthDate in person) {
//     for (let i = 0; i < person.length; i++) {
//         let birthSplit = person[i].birthDate.split(' ');
//         if (birthSplit[2] % 2 !==0) {
//             let birthReturn = birthSplit.join(' ');
//             console.log(birthReturn);
//         } else {
//             console.log('false');
//         }
//      }
// }

let arrayOfPersons = [{
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "male"
}, {
    firstName: "Bob",
    lastName: "Chase",
    birthDate: "Jan 5, 1825",
    gender: "female"
}, {
    firstName: "Casey",
    lastName: "Samantha",
    birthDate: "April 27, 1893",
    gender: "female"
}, {
    firstName: "Gavin",
    lastName: "Hudson",
    birthDate: "Jan 5, 1992",
    gender: "male"
}]


// arrayOfPersons.map(element => {
//     console.log(element);
// });

// const onlyMales = arrayOfPersons.filter(function sorted(person) {
//     if (person.gender == 'male')
//     console.log(person.firstName + ' ' + person.lastName)
// })

// .7
// const findOldPeople = arrayOfPersons.filter(year => {
//     let re = /[' ']\d{4}/;

//     let string = year.birthDate;

//     if (string.match(re) <= 1990) {
//         console.log(year.firstName + ' ' + year.lastName);
//     }
// })




