/**
 * Use forEach when iterating over arrays.
   Use for loop when counting up or down.
   Use for loop when counting up or down irregularly (skipping some items).
   for...of can be used to iterate over arrays.
   Use for...in when iterating over objects.
 */


// Array 

const users = ["Marinario", "Admin", "Tom"]
console.log(users)
console.log(users.length)
console.log(users[0])
users.push("Jerry")
console.log(users)

// Array forEach 

users.forEach(function(user) {
    console.log(user)
})

const nums = [1, 2, 3, 4, 5]

// Array filter 

const results = nums.filter(function(num) {
    return num > 3
})
console.log(results)

// Array find

const arrFind = users.find(function(user) {
    return user === "Tom"
})

console.log(arrFind)

// Array map

const mapArray = nums.map(function(num) {
    return num * 2
})
console.log(mapArray)

// Array includes

console.log(nums.includes(3))

// Array join

console.log(users.join(","))

const allUsers = [{
    id: 1,
    name: "Tom"
}, {
    id: 2,
    name: "Jerry"
}, {
    id: 3,
    name: "Micky"
}
];

const userNamesArray = allUsers.map(user => user.name);
console.log(userNamesArray)

const numbers = [15, 10, 20];

const allAbove10 = numbers.every(number => number >= 10); // true
const allAbove15 = numbers.every(number => number >= 15); // false
console.log(allAbove10)
console.log(allAbove15)
const someOver18 = numbers.some(number => number >= 18); // true
const someUnder10 = numbers.some(number => number < 10); // false
console.log(someOver18)
console.log(someUnder10)
console.log(numbers.splice(1, 1))

const totalSum = numbers.reduce((total, current) => { //The reduce() method takes 2 parameters: reducer and initialValue.
    return total + current
}, 0)

console.log(totalSum)

const multiplyNum = numbers.reduce((total, current) => { //The reduce() method takes 2 parameters: reducer and initialValue.
    return total * current
}, 1)

console.log(multiplyNum)
