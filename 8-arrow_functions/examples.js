const sum = (a, b) => {
    return a + b
}

console.log(sum(3, 4))

const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}

console.log(getFullName("Marinario", "Mustafa"))

const users = ["Tom", "Jerry", "Micky", "Speddy"]

users.forEach(user => console.log(user)) // implicit return

const adminUser = users.filter(user => {
    return user === "Tom"
})

console.log(adminUser)