class Employee {
    constructor(fistName, lastName, salary, age) {
        this.fistName = fistName
        this.lastName = lastName
        this.salary = salary
        this._age = age // Private variable, we should not access it from outside!
    }

    // Instance methods

    getFullname() {
        return `${this.fistName} ${this.lastName}`
    }

    // Getters & Setters

    get age() {
        return this._age
    }

    set age(value) {
        return this._age = value
    }

   // return this; allows method chaining

}

const e1 = new Employee("Tom", "Oder", 1250, 31)
console.log(e1)
console.log(e1.getFullname())
e1.age = 29
console.log(e1.age)

// Class inheritance

class Manager extends Employee {
    constructor(fistName, lastName, salary, age, departament) {
        super(fistName, lastName, salary, age)
        this.departament = departament
    }

    getDepartament() {
        return `${this.departament}`
    }

    manageFullName() {
        return `${super.getFullname()} ${this.getDepartament()}`;
    }
}

const m2 = new Manager("Jerry", "Scot", 3500, 36, "IT")
console.log(m2.getFullname())
console.log(m2.manageFullName())