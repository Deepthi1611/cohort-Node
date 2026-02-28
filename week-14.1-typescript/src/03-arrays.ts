// num is of array type that contains numbers
let num: number[] = [1,2,3]

interface User {
    name: string,
    age: number
}

let users: User[] = [
    {
        name: 'Deepthi',
        age: 24
    },
    {
        name: 'srikar',
        age: 17
    },
    {
        name: 'shobha',
        age: 44
    }
]

// return users with age > 18
let eligibleUsers = users.filter((user) => user.age > 18)
console.log(eligibleUsers)