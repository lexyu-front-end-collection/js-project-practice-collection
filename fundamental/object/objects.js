/* Object */
// A group of properties and methods
// properties = what an object has
// methods = what an object can do
// use . to access properties / methods

/* this */
// reference to a particular object
// the object depends on the immediate context
console.log('%c Object、this ', 'background-color: yellow; color: black; font-weight: bold')

// this.name = 'MyWindow'
window.name = 'MyWindow'
console.log(this) // window object

const car = {
    model: 'Tesla',
    color:'Red',
    year:'2023',

    drive: function () {
        console.log(this)
        console.log(`You drive the ${this.model}`)
    },
    brake: function () {
        console.log('You step on the brakes')
    }
}
console.log(car.model)
console.log(car.color)
console.log(car.year)

car.drive()
car.brake()

const car2 = {
    model: 'M',
    color:'Yellow',
    year:'2023',

    drive: function () {
        console.log(this)
        console.log(`You drive the ${this.model}`)
    },
    brake: function () {
        console.log('You step on the brakes')
    }
}

console.log(car2.model)
console.log(car2.color)
console.log(car2.year)

car2.drive()
car2.brake()
