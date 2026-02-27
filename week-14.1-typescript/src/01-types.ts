console.log('hello world')

// PRMITIVE TYPES

// defining type - x is type of number and cannot store other types of values
let x:number = 1

// we'll get error
// x = 'hello'

// automatically infers type as 1 - sometimes when it can't infer the type for complex
// datatypes, we need to explicitly define the type
let y = 2

// function that greets person based on firstName
// firstName type is string and return type of the function is void
function greet(firstName: string): void {
    console.log(`hello ${firstName}`)
}

greet('Deepthi')

// any represents the datatype can be anything
// for any type we can give explicitly any for something but it is not recommended implicit any type
// if we want to support more than one datatype then we use | operator for defining types
// ex: x : string | number

// write a function that takes another function as input and runs it after 1 second
// type of the 
// function delayed(func: Function):void {
//     setTimeout(() => {
//         func()
//     }, 5000)
// }

// func is type of function which returns nothing, delayed function also returns nothing
function delayed(func: ()=> void):void {
    setTimeout(() => {
        func()
    }, 5000)
}

delayed(()=> console.log('printed after some time'))

// greeting is an arrow function which takes name argument which is a string and returns nothing
let greeting = (name: string):void => console.log('hello' + name)

greeting('srikar')

// TS CONFIG
// noimplicitany is true by default
// removecomments: true - comments written in TS files are ignored in js files

// NON - PRIMITIVE TYPES

function greets(user: {
    name: string,
    age: number
}) {
    console.log(user.name)
    console.log(user.age)
}

// greets({name: "Deepthi", age: 24})
let user : {
    name: string,
    age: number
} = {
    name: 'deepthi',
    age: 24
}

// here we are repeating the user definition but repetition should be avoided
greets(user)
// to avoid repetition we use type

type user = {
    name: string,
    age: number
}
// and use the above as type for argument in greets function
// we can also define interface rather than type and also use that as an type for the object

interface users {
    name: string,
    age: number
}

type userType = {
    name: string,
    age: number
}

let user1: user = {
    name: 'Deepthi',
    age: 24
}

// with types we can use union operator, we cannot use union operator with interfaces
type stringOrNumber = string | number

function sum(a: stringOrNumber, b: stringOrNumber): stringOrNumber {
    if (typeof a === "number" && typeof b === "number") {
        return a + b; // number
    }
    return String(a) + String(b); // string
}

// we can also use intersection with types
type employee = {
    name: string
}

type manager = {
    department: string
}

// lead should contain both employee and manager related key-value pairs
type lead = employee & manager

let teamlead: lead = {
    name: 'Deepthi',
    department: 'engineering'
}