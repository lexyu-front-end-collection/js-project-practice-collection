/* function expression */
// function without a name
console.log('%c function expression ', 'background-color: yellow; color: black; font-weight: bold')

const greeting = function () {
    console.log('Hello!')
}

greeting()

let count = 0;

document.getElementById('increaseBtn').onclick = function () {
    count += 1
    document.getElementById('myLabel').innerHTML = count
}

document.getElementById('decreaseBtn').onclick = function () {
    count -= 1
    document.getElementById('myLabel').innerHTML = count
}

/*
function increaseCount () {
    count += 1
    document.getElementById('myLabel').innerHTML = count
}

function decreaseCount () {
    count -= 1
    document.getElementById('myLabel').innerHTML = count
}
*/

/* arrow function */
// compact alternative to a traditional function expression
console.log('%c arrow function ', 'background-color: yellow; color: black; font-weight: bold')

const greeting2 = function (userName) {
    console.log(`hello ${userName}`)
}

const greeting3 = (userName) => { console.log(`hello ${userName}`) }


greeting2('LLL')
greeting3('YYY')

const percent = function (x, y) {
    return x / y * 100
}
const percent2 = (x, y) => x / y * 100

console.log(`${percent(37, 50)}%`)
console.log(`${percent2(37, 50)}%`)

let grades = [100, 50, 90, 60, 80, 70]

grades.sort(function (x, y) {
    return y - x
})
grades.forEach(function (element) {
    console.log(element)
})

grades.sort((x, y) => y - x)
grades.forEach(element => console.log(element))

/* nested function */
// Functions inside other functions.
// Outer functions have access to inner functions
// Inner functions are 'hidden' from outside the outer function
// used in closures
console.log('%c nested function ', 'background-color: yellow; color: black; font-weight: bold')

let userName = 'UUU'
let userInbox = 0

login()

function login() {
    displayUserName()
    displayUserInbox()

    function displayUserName() {
        console.log(`Welcome ${userName}`)
    }
    function displayUserInbox() {
        console.log(`You have ${userInbox} new messages`)
    }
}

