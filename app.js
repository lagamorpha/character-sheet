// basic random number logic
let rand = Math.random();
// console.log(rand);

// basic die6 logic
let die6 = Math.floor(rand * 6 + 1);
// console.log(die6);

// advanced variable die function
const die = (sides) => {
    return Math.floor(rand * sides + 1);
}

// multiple die function

// attempt 1 (works, but just copys first die)
// let total = 0;
// for (i = 1; i <= 3; i++) {
//     total += die6;
// }
// console.log(total);

