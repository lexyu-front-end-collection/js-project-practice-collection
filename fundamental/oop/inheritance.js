/* inheritance */
// a child class can inherict all the
// methods and properties from another class
console.log('%c inheritance ', 'background-color: yellow; color: black; font-weight: bold')

class Animal {
    alive = true
    eat () {
        console.log(`This ${this.name} is eating`)
    }

    sleep () {
        console.log(`This ${this.name} is sleeping`)
    }
}

class Rabbit extends Animal {
    // alive = true
    name = 'rabbit'

    // eat () {
    //     console.log(`This ${this.name} is eating`)
    // }

    // sleep () {
    //     console.log(`This ${this.name} is sleeping`)
    // }

    run () {
        console.log(`This ${this.name} is running`)
    }
}

class Fish extends Animal {
    // alive = true
    name = 'fish'

    // eat () {
    //     console.log(`This ${this.name} is eating`)
    // }

    // sleep () {
    //     console.log(`This ${this.name} is sleeping`)
    // }

    swim () {
        console.log(`This ${this.name} is swimming`)
    }
}

class Hawk extends Animal {
    // alive = true
    name = 'hawk'

    // eat () {
    //     console.log(`This ${this.name} is eating`)
    // }

    // sleep () {
    //     console.log(`This ${this.name} is sleeping`)
    // }

    fly () {
        console.log(`This ${this.name} is flying`)
    }
}
 
const rabbit = new Rabbit()
const fish = new Fish()
const hawk = new Hawk()

console.log(rabbit.alive)
rabbit.eat()
rabbit.sleep()
rabbit.run()
// fish.run() // error, fish doesn't have run method