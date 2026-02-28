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

// we can implements interfaces using classes but not types
// we can extend interface from another interface interface a1 extends a2 where a2 is also an interface - kind of intersection

// ABSTRACT CLASSES
abstract class Users {
    constructor(public name: string, public phone?: string){ // phone optional
        this.name = name
        this.phone = phone
    }
    greet():string {
        return 'hello'
    }
    abstract getRole(): string
}
// abstract class is like blueprint
class User3 extends Users {
    constructor(public name: string) {
        super(name)
    }
    // greet(): string {
    //     return 'hii'
    // }
    getRole(): string {
        return 'manager'
    }
}

let obj = new User3('Deepu')
// we can call parent methods from subclass object
console.log(obj.greet())

// but in abstract classes we can give default implementations as well unlike interfaces
// Mandatory for subclasses: members marked abstract in the abstract class.
// Not mandatory: concrete members (normal methods/properties with implementation/value) are inherited as-is.


// TYPES
// types are used to aggregate data together
// Differences - we can implement interface in a class but we cannot do that with types,

type Rect = {
    length: number,
    breadth: number
}

// rectangle is of type Rect
let rectangle: Rect = {
    length: 11,
    breadth: 22,
}

// types let us use unions and intersections

// intersection - type that has all properties of multiple types
type Employee = {
    name: string,
    startDate: string
}

type Managers = {
    name: string,
    department: string
}

// intersection of types
type teamlead = Employee & Managers

let t: teamlead = {
    name: 'Srikar',
    startDate: '12-12-2001',
    department: 'engineering',
    // age: 22 - error for extra property
}

// union
type GoodUser = {
    name: string,
    gift: string
}

type badUser = {
    name: string,
    ip: string
}

type u = GoodUser | badUser

// union can have either or all the values
// it can have properties of A or B or both
let u1: u = {
    name: 'srikar',
    gift: 'random',
    ip: '111',
    // random: 'randd' - error for extra property
}

type A = { x: number; y: number };
type B = { z: string };

type U = A | B;
const v: U = { x: 1, z: "hi" };
// const v: U = { x: 1, z: "hi", 'extra': 'extra' }; // error as extra is not present any of the types
//  for unions of object types, object-literal checking is permissive if each provided property belongs to at least one union member.
// For a union target (A | B), TS uses a permissive rule:
// each provided property must exist in some union member.
// for intersection it should contain all properties of all interfaces/types

// for interfaces we need type to use union or intersection on top of it but inside the interface -
//  for properties inside the interface we can directly use union or intersection operator

// If you want stricter behavior, use a discriminated union
type A2 = { kind: "a"; x: number; y: number };
type B2 = { kind: "b"; z: string };
type U2 = A2 | B2;
// U2 accepts only these two shape families:

// A2 shape: must have kind: "a", x (number), y (number)
// B2 shape: must have kind: "b", z (string)
const v1: U2 = { kind: "a", x: 1, y: 11 };
const v2: U2 = { kind: "a", x: 0, y: -5 };
const v3: U2 = { kind: "b", z: "hi" };
const v4: U2 = { kind: "b", z: "" };
// const ex: U2 = { x: 1, z: "hi" } //error
// Now mixed shapes like { x: 1, z: "hi" } won’t match
// kind can have any one type strictly and completely - either A2 or B2 but not both 