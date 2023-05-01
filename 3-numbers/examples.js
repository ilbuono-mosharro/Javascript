// Numbers

let num = 1000
console.log(num)
console.log(num.toString())

let numStr = "1000"
console.log(Number.parseInt(numStr, 10)) /// int

console.log(num + Number.parseInt(numStr, 10)) // 2000

let sum = 8 + 4 
let substraction = 8 - 4
let multiply = 8 * 4
let dividing = 8 / 4 
let remainder = 8 % 4
console.log(sum)
console.log(substraction)
console.log(multiply)
console.log(dividing)
console.log(remainder)

// Number methods

Math.round(2.6); // 3
Math.floor(2.6); // 2
Math.ceil(2.6); // 3

Math.round(2.5); // 3
Math.floor(2.5); // 2
Math.ceil(2.5); // 3