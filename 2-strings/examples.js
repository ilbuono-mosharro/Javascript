// Strings

function getName(name) {
  return name.length;
}

console.log(getName("Marinario"));

function getLastName(lastName) {
  return lastName.toUpperCase();
}

console.log(getLastName("Mustafa"));

function fullName(firstName, lastName) {
  return `${firstName.toLowerCase()} ${lastName.toUpperCase()}`;
}

console.log(fullName("Marinario", "Mustafa"));

// Character access

let language = "Javascript";
console.log(language[0]);
console.log(language[1]);
console.log(language[2]);
console.log(language[language.length - 2]);
console.log(language.at(2));
console.log(language.at(-2));
console.log(language.startsWith("J"))
console.log(language.endsWith("t"))
console.log(language.includes("Java"))

// Substrings

console.log(language.substring(1, 4)); //"ava"
console.log(language.substring(4)); //"script"

// Plus operator

let fName = "Marinario" + " " + "Marinario"
console.log(fName)

// Template strings

let text = `I am learning
javascript.`
console.log(text)
console.log(`I am learning ${language}.`)

let spaceText = " Javascript     "
console.log(spaceText.trim())

let apps = "Calculator,Phone,Contacts";
let appsArray = apps.split(",");
console.log(appsArray);
let smartPhones = "Nokia,Samsung,Apple"
console.log(smartPhones.replace(",", "-"))
console.log(smartPhones.replaceAll(",", "-"))