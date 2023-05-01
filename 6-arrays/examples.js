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