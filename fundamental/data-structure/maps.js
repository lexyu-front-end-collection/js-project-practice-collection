/* Map */
// object that holds key-value pairs of any data type
console.log('%c Map ', 'background-color: yellow; color: black; font-weight: bold')

const store = new Map([
    [ 'T-shirt', 20 ],
    [ 'Jeans', 30 ],
    [ 'Socks', 10 ],
    [ 'Underwear', 50 ]
])

let shoppingCart = 0;

shoppingCart += store.get('T-shirt')
shoppingCart += store.get('Socks')

console.log(shoppingCart)

store.set('hat', 50)
// store.delete('hat')
store.has('Jeans')
console.log(store.size)

store.forEach((value, key) => console.log(`${key} $${value}`))