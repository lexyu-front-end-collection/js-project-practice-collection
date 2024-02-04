/**
 * callback = a function passed as an argument to another function.
 * 
 * Ensures that a function is not going to run before a task is completed.
 * Helps us develop asynchronous code.
 * When one function has to wait for another function that helps us avoid errors
 * and potential problems
 * Ex. Wait for a fail to load
 */
console.log('%c callback ', 'background-color: yellow; color: black; font-weight: bold')

/*
let total = sum(2, 3)
displayConsole(total)
displayDOM(total)

function sum (x, y) {
    let result = x+y
    return result
}
*/

sum(2, 3, displayConsole)
sum(2, 3, displayDOM)

function sum(x, y, callback) {
    let result = x + y
    callback(result)
}

function displayConsole(output) {
    console.log(output)
}

function displayDOM(output) {
    document.getElementById('myLabel').innerHTML = output
}