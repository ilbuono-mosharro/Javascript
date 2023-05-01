// Conditions 

let speedLimit = 109;

if (speedLimit > 120) {
    console.log("You have exceeded the maximum speed.")
} else if (speedLimit < 120 && speedLimit > 109 ) {
    console.log("You are driving at normal speed.")
} else {
    console.log("You are driving at below normal speed.")
}

let notifications = 15

if (notifications >= 15) {
    console.log("You have 15 notifications or more than 15.")
} else if (notifications === 10) {
    console.log("You have 10 notifications.")
} else if (notifications <= 9 ) {
    console.log("You have 9 notifications or less than 9.")
}

let dashboard = "dark";

if (dashboard !== "light" ) {
    console.log("Your dashboard is on dark mode.")
}
