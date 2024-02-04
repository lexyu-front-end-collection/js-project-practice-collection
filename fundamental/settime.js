/* setTime */
// invokes a function after a number of milliseconds
// asynchronous function (doesn't pause execution)

let item = 'cryptocurrency'
let price = 9999

let timer1 = setTimeout(firstMsg, 3000, item, price);
let timer2 = setTimeout(secondMsg, 6000)
let timer3 = setTimeout(thirdMsg, 9000)


function firstMsg (item, price) {
    alert(`Buy for ${item} for ${price}`)
}
function secondMsg () {
    alert(`This is not a scam`)
}
function thirdMsg () {
    alert(`DO IT!`)
}

document.getElementById('buyBtn').onclick = () => {
    clearTimeout(timer1)
    clearTimeout(timer2)
    clearTimeout(timer3)
    alert(`Thanks for buying`)
}