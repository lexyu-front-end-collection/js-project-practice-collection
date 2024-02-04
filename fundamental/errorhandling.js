/* error */
// object with a description of something went wrong
// Can't open a file
// Lose Connection
// User types incorrect input
//  TypeError


try {
    // console.lag();
    let x = window.prompt("Enter a #")
    x = Number(x);

    if (isNaN(x)) throw "That wasn't a number!"
    if (x == "") throw "That was empty" 

    console.log(`${x} is number`)
} catch (error) {
    console.log(error)
} finally {
    console.log("This is always executes")
}