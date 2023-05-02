const userList = ["Tom", "Jerry", "Micky", "Speedy"]

const [user1, user2, user3, user4] = userList
console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)

const getLocationString = location => {
    //destructure into 2 variables: lat & lng
    const [lat, lng] = location
    return `The latitude is ${lat} and the longitude is ${lng}`;
}

console.log(getLocationString([1201, 970]))

// Array concatenation

const users = [...userList, "Goku"]
console.log(users)