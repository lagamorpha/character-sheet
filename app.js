// basic random number logic
let rand = Math.random();
// console.log(rand);

// basic die6 logic
let die6 = Math.floor(rand * 6 + 1);
// console.log(die6);

// advanced variable die function
const die = function (sides) {
    return Math.floor(rand * sides + 1);
}
console.log(die(10));