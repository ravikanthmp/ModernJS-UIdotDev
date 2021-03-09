class Animal {
    #_milesRun = 0;

    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }

    eat (){
        console.log(`animal ${this.name} is eating`);
    }

    sleep (){
        console.log(`animal ${this.name} is sleeping`);
    }

    play (){
        console.log(`animal ${this.name} is playing`);
    }

}

let lion = new Animal('leo', 2);
let dog = new Animal('snoopy', 1);

let lionPrototype = Object.getPrototypeOf(lion);
let dogPrototype = Object.getPrototypeOf(dog);

console.log(dogPrototype)
console.log(lionPrototype)
console.log(lion.#_milesRun)

console.log(lionPrototype === dogPrototype)


