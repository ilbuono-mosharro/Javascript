// Fetch get

fetch("Url")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))
.finally(() => console.log("Done"))

// Fetch post put or delete

fetch("Url", {
    method: "POST", // or PUT or DELETE
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        key1: 'value1', 
        key2: 'value2', 
    })
})
.then(response => response.json())
.then(data => {
    console.log(data); // read server response
})
.catch(error => console.log(error))
.finally(() => console.log("Done"))