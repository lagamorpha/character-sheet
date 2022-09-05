// dice class constructor function
class Dice {
    constructor(sides) {
        this.sides = sides
    }
    roller() {
        return Math.floor(Math.random() * sides + 1);
    }
}

const d6 = new Dice(6);
console.log(d6.roller(6));