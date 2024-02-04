/* super */
// Refer to the parent class
// commonly used to invoke constructor of a parent class
console.log('%c super ', 'background-color: yellow; color: black; font-weight: bold')

class Animal {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
}

class Rabbit extends Animal {
    constructor (name, age, runSpeed) {
        // this.name = name
        // this.age = age
        super(name, age)
        this.runSpeed = runSpeed
    }
}

class Fish extends Animal {
    constructor (name, age, swinSpeed) {
        // this.name = name
        // this.age = age
        super(name, age)
        this.swinSpeed = swinSpeed
    }
}

class Hawk extends Animal {
    constructor (name, age, flySpeed) {
        // this.name = name
        // this.age = age
        super(name, age)
        this.flySpeed = flySpeed
    }
}

/**
 * Uncaught ReferenceError: 
 * Must call super constructor in derived class before accessing 'this'
 * or returning from derived constructor
 */

const rabbit = new Rabbit('rabbit', 1, 40)
const fish = new Fish('fish', 2, 80)
const hawk = new Hawk('hawk', 3, 100)

console.log(rabbit)
console.log(fish)
console.log(hawk)