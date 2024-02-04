/* class */
// a blueprint for creating objects
// define what properties and methods they have
// use a constructor for unique properties
console.log('%c class ', 'background-color: yellow; color: black; font-weight: bold')

class Player {
    score = 0

    pause () {
        console.log('You paused the game')
    }
    exit () {
        console.log('You exited the game')
    }
}

const player1 = new Player()
const player2 = new Player()

console.log(player1)

player1.score += 1;
console.log(player1.score)
player1.pause()
player2.exit()

/* constructor */
// a special method of a class,
// accepts arguments and assigns properties
console.log('%c constructor ', 'background-color: yellow; color: black; font-weight: bold')

class Student {
    constructor (name, age, gpa) {
        this.name = name
        this.age = age
        this.gpa = gpa
    }
    study () {
        console.log(`${this.name} is studying`)
    }
}

const student1 = new Student('L', 30, 3.2)
console.log(student1.name)
console.log(student1.age)
console.log(student1.gpa)
student1.study()

/* static */
// belongs to the class, not the object
// properties: useful for caches, fixed-configuration
// methods: useful for utility functions
console.log('%c static ', 'background-color: yellow; color: black; font-weight: bold')

class Car {
    // numberOfCars = 0 // belong to Car
    static numberOfCars = 0 

    constructor (model) {
        this.model = model
        // this.numberOfCars += 1
        Car.numberOfCars += 1
    }
    static startRace () {
        console.log("3...2...1...GO!")
    }
}
const car1 = new Car('Tesla')
const car2 = new Car('Corvette')
const car3 = new Car('BMW')
const car4 = new Car('Ferrari')
const car5 = new Car('Toyata')

console.log(Car.numberOfCars) // 5

/* 0
console.log(car1.numberOfCars)
console.log(car2.numberOfCars)
console.log(car3.numberOfCars)
console.log(car4.numberOfCars)
console.log(car5.numberOfCars)
*/

// car1.startRace()
Car.startRace()
