// variable declarations
const rolls = [];
const results = [];

// dice class constructor function
class Dice {
    constructor(sides) {
        this.sides = sides
    }
    roller(sides) {
        return Math.floor(Math.random() * sides + 1);
    }
}

// create die variable form contructor
const die = () => {
    new Dice();
};

// use die to make individual die
const d4 = die.roller(4);
// const d6 = () => die(6);
// const d8 = () => die(8);
// const d10 = () => die(10);
// const d12 = () => die(12);
// const d20 = () => die(20);
// const d30 = () => die(30);
// const d100 = () => die(100);
console.log(d4);

// multi roller
// let dieRoller