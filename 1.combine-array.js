// 1. Concat()

let firstArray = [1,2,3,'Uma']
let secondArray = ['Swathi',4,5,6]

let combinedArray1 = firstArray.concat(secondArray)
let combinedArray2 = secondArray.concat(firstArray)

console.log(`Combined Array1 : `+ combinedArray1)
console.log(`Combined Array2 : `+ combinedArray2)

let arrayOne   =   [1,2,3,'Uma']
let arrayTwo   =   ['Swathi',4,5,6]
let arrayThree =   [7,8,9, 'Jagrav']

let combinedArray = [].concat(arrayOne, arrayTwo, arrayThree)
console.log(`combinedArray : ` , combinedArray)

// 2. Using … (Spread Operator) in ES6 As Shortcut

let first = [1, 2, 3, 'Uma']
let second = ['Swathi', 4, 5, 6]
let third = [7, 8, 9, 'Jagrav']

let fourth = [...first, ...second, ...third]
console.log(`Fourth : `, fourth)

// 3. Merge Arrays With Push

let one = [1, 2, 3, 'Uma']
let two = ['Swathi', 4, 5, 6]
let three = [7, 8, 9, 'Jagrav']

let four = [];

four.push(...one, ...two, ...three)
console.log(`four : `, four)