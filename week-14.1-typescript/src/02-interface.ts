// types and interfaces are used in case of non-primitive types or complex objects
// they are used for creating types for complex objects
// generally interfaces are written with first letter as capital
interface User {
    // name: string,
    name: 'Deepthi' | 'Srikar' // this accepts only these names
    age: number,
    address: {
        city: string,
        country: string,
        pincode: number
    }
}

// user1 is type of User
let user1: User

// OPTIONAL PARAMETERS
// ? is used to make a specific key optional, syntax is key?: type
interface User2 {
    // name: string,
    name: string
    age: number,
    address?: {
        city: string,
        country: string,
        pincode: number
    }
}

let user2: User2 = {
    name: 'Deepthi',
    age:24
}

// INTERFACE AS TYPE
// interfaces can also use another interfaces as types
interface Address {
    city: string,
    country: string,
    pincode: number
}

interface Office {
    name: string,
    address: Address
}

// IMPLEMENTING INTERFACES
// interface with function
interface Person {
    name: string,
    age: number,
    greet: () => string 
    // greet():string - another syntax
}

// create an object called p1 which of Person type
let p1: Person = {
    name: 'Deepthi',
    age: 24,
    greet() {
        return 'hello' + this.name
    },
}

p1.greet() // hello Deepthi

class Rectangle{
    constructor() {}
    area() {} // member method
}

// create an instance of the class which is an object
const rect = new Rectangle()

// we can use objects that is type of interface or we can create a class that implements a class
// and then create an object that which is an instance of that class
// implementing means this should contain everything present in the interface and can have extra things
// extends and implements are different - extends is used for inheritance - where we call super keyword of parent class
// extends also get the implementation from parent class to child class
// implementing is like implementing the blueprint but not getting anything from the parent
class Manager implements Person {
    // name: string
    // age: number
    // company: string
    constructor(public name:string, public age:number, public company: string) {
        this.name = name
        this.age = age
        this.company = company
    }
    greet() {
        return 'hello '+ this.name
    }
}
// we don't need to use function keyword for defining functions in classes

// Interfaces with classes give you a different benefit than plain object typing.

// With const x: Person = {...}, you only type-check that one object literal.
// With class Manager implements Person, you enforce that every instance of Manager matches Person.
// Why this matters:
// Reusable blueprint for many objects.
// Compile-time guarantee the class has required fields/methods.
// Better structure for behavior (methods, inheritance, encapsulation), not just data shape.
// Lets you program against abstractions (Person) while swapping implementations (Manager, Employee, etc.).