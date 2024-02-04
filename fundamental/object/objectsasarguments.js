/* Objects as arguments */
class Car {
    constructor (model, year, color) {
        this.model = model
        this.year = year
        this.color = color
    }
}

const car1 = new Car("Tesla", 2023, "white")
const car2 = new Car("Ford", 2022, "blue")
const car3 = new Car("Lambo", 2024, "yellow")

changeColor(car3, 'gold')
dispalyInfo(car3)

function dispalyInfo (car) {
    console.log(car.model)
    console.log(car.year)
    console.log(car.color)
}

function changeColor (car, color) {
    car.color = color
}