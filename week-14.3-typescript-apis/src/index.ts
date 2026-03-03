// PICK API
interface User {
    name: string;
    age: number;
    email: string;
    password: string;
}

// pick expects two arguments, the first is the type we want to pick from 
// and the second is a union of the keys we want to pick
type updateProps = Pick<User, 'name' | 'email' | 'age'>;

// update user takes user info as argument but it does not need everything in the
// user interface, so we can use pick to only get the properties we need
function updateUser(user: updateProps) {
// hit the database and update the user info
}

// PARTIAL API
// partial takes a type and makes all of its properties optional
// partial is useful when we want to update a user but we don't want to require all the properties
type updateProps2 = Partial<updateProps>;

function updateUser2(user: updateProps2) {
    // hit the database and update the user info
}

// Readonly API
// readonly takes a type and makes all of its properties readonly
// readonly is useful when we want to create a user but we don't want to allow any changes to the user info after it's created
type UserInfo = Readonly<User>;

function createUser(user: UserInfo) {
    // hit the database and create the user
    // we can't change the user info after it's created because it's readonly
}

type user = {
    readonly name: string;
    readonly age: number;
}

let user1: user = {
    name: 'John',
    age: 30
}

// user1.name = 'Jane'; // Error: Cannot assign to 'name' because it is a read-only property.
// another use case is configuration objects, we can use readonly to make sure that the configuration object is not changed after it's created

// Record and Map
