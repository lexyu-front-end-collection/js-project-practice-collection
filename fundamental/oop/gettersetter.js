/* get */
// binds an object property to a function
// when that property is accessed
/* set */
// binds an object property to a function
// when that property is assigned a value
console.log('%c getter & setter ', 'background-color: yellow; color: black; font-weight: bold')

class Car {
    constructor (power) {
        this._gas = 25
        this._power = power // _ protected
    }
    get power () {
        return `${this._power}hp`
    }
    get gas () {
        return `${this._gas}L (${this._gas / 50 * 100}%)`
    }
    set gas (value) {
        if (value > 50) {
            value = 50
        } else if(value < 0) {
            value = 0
        }
        this._gas = value
    }
}

let car = new Car(1000)
console.log(car.power)
car.gas = 10000000000
console.log(car.gas)
