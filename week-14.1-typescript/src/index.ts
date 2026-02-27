console.log('hello world')

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