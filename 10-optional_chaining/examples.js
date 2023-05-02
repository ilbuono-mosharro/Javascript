const user = {
    details: {
        name: {
            firstName: "Sam"
        }
    },
    data: null
}

console.log(user.details?.name?.firstName) // "Sam"
console.log(user.data?.id) // undefined
console.log(user.children?.names) // undefined
console.log(user.details?.parent?.firstName ?? "N/A") // N/A Nullish coalescing 
