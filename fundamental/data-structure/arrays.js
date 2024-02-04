
/**
 * array = Store Multiple Values
 */
console.log('%c Array Intro ', 'background-color: yellow; color: black; font-weight: bold')

let fruits = [ 'apple', 'orange', 'banana' ]
console.log(fruits)

fruits[0] = 'coconut'
console.log(fruits)

fruits.push('lemon')    // add a element
console.log('After push()', fruits)

fruits.pop();   // removes last element
console.log('After pop()', fruits)

fruits.unshift('mango') // add element to beginning
console.log('After unshift()', fruits)

fruits.shift()  // removes element from beginning
console.log('After shift()', fruits)

let length = fruits.length
console.log('Array length', length)

let index = fruits.indexOf('banana')
console.log('banana => Index Of', index)

/* Loop through an array */
console.log('%c Array Loop ', 'background-color: yellow; color: black; font-weight: bold')
let prices = [ 5, 10, 15, 20, 25 ]

for (let i = 0; i < prices.length; i += 1) {
    console.log(prices[i])
}

for (const price of prices) {
    console.log(price)
}

for (const key in prices) {
    if (Object.hasOwnProperty.call(prices, key)) {
        const price = prices[key];
        console.log(price, key)
    }
}

/* Sort an array of strings */
console.log('%c Sort Array ', 'background-color: yellow; color: black; font-weight: bold')
fruits = [ 'banana', 'orange', 'apple', 'mango' ]

// fruits.sort()
fruits.sort().reverse()

for (const fruit of fruits) {
    console.log(fruit)
}

/* 2D array */
console.log('%c 2D Array ', 'background-color: yellow; color: black; font-weight: bold')
fruits = [ 'apples', 'oranges', 'bananas' ]
let vegetables = [ 'carrots', 'onions', 'potatoes' ]
let meats = [ 'eggs', 'chicken', 'fish' ]

let grocertyList = [ fruits, vegetables, meats ]

grocertyList[2][2] = 'Test' 

for (const list of grocertyList) {
    console.log(list)
    for (const food of list) {
        console.log(food)
    }
}

/* spread operator */
// allow an iterable such as an array or string to be expanded
// in places where zero or more arguments are expected (unpacks the elements)
console.log('%c spread operator ', 'background-color: yellow; color: black; font-weight: bold')
let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
let str = 'This is string'
console.log(...numbers)
console.log(...str)

let maximum = Math.max(...numbers)
console.log(maximum)

let class1 = [ 'L', 'P', 'S' ]
let class2 = [ 'Y', 'K', 'R' ]
class1.push(...class2)
console.log(class1)

/* rest parameters */
// represents an indefinite number of parameters (pack arguments into an array)
console.log('%c rest parameters ', 'background-color: yellow; color: black; font-weight: bold')
let a = 1
let b = 2
let c = 3
let d = 4
let e = 5

console.log(sum(a, b, c, d, e))

function sum (x, y, ...numbers) {
    console.log('a = ', x)
    console.log('b = ', y)
    let total = 0;
    for (const num of numbers) {
        total += num
    }
    return total
}
// function sum (a, b) {
//     return a + b
// }
// function sum (a, b, c) {
//     return a + b + c
// }
// function sum (a, b, c, d) {
//     return a + b + c + d
// }

/* array.forEach() = executes a provided callback function once for each array element */
console.log('%c array.forEach() ', 'background-color: yellow; color: black; font-weight: bold')

let students = [ 'ray', 'pat', 'duke' ]

students.forEach(capitalize)
students.forEach(print)

function capitalize (element, index, array) {
    array[index] = element[0].toUpperCase() + element.  substring(1)
}

function print (element) {
    console.log(element)
}

// console.log(students[1])

/* array.map() */
// executes a provided callback function once for each array element
// AND creates a new array
console.log('%c array.map() ', 'background-color: yellow; color: black; font-weight: bold')
numbers = [ 1, 2, 3, 4, 5 ]
let squares = numbers.map(square)
squares.forEach(print)
let cubes = numbers.map(cube)
cubes.forEach(print)

function square (element) {
    return Math.pow(element, 2)
}
function cube (element) {
    return Math.pow(element, 3)
}

/* array.filter() */
// creates a new array with all elements that pass the test provided by a function
console.log('%c array.filter() ', 'background-color: yellow; color: black; font-weight: bold')
let ages = [ 18, 16, 21, 17, 19, 90 ]

let adults = ages.filter(checkAge)
adults.forEach(print)

function checkAge (element) {
    return element >= 18
}

/* array.reduce() */
// reduces an array to a single value
console.log('%c array.reduce() ', 'background-color: yellow; color: black; font-weight: bold')
prices = [ 5, 10, 15, 20, 25 ]
let total = prices.reduce(checkOut)

console.log(`The total is: $${total}`)

function checkOut (total, element) {
    return total + element
}

/* sort an array of numbers */
console.log('%c Sort an array of numbers ', 'background-color: yellow; color: black; font-weight: bold')
let grades = [ 100, 50, 90, 60, 80, 70 ]

grades.sort(ascendingSort)

grades.forEach(print)

function descendingSort (x, y) {
    return y - x
}

function ascendingSort (x, y) {
    return x - y
}

/* shuffle an array */
let cards = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ]

shuffle(cards)

console.log(cards)
cards.forEach(card => console.log(card))

function shuffle (array) {
    let currentIndex = array.length
    console.log(Math.random() * array.length)
    while(currentIndex != 0) {
        let randomIndex = Math.floor((Math.random() * array.length))
        currentIndex -= 1

        let temp = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temp
    }
    return array
}