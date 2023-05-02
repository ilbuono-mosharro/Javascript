const user = {
    id: 1,
    firstName: "Marinario",
    lastName: "Mustafa",
    age: 20
};

console.log(user)
console.log(user.firstName)
console.log(user.lastName)
user.age = 31
console.log(user.age)
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(user["id"])
console.log(Object.entries(user))
const { id, firstName, lastName, age } = user
console.log(id)
console.log(firstName)

const otherUser = {
    id: 2,
    firstName: "Tom",
    lastName: "Oder",
    age: 25, 
    type: "admin"
}

const mergeObjects = {...user, ...otherUser}
console.log(mergeObjects)