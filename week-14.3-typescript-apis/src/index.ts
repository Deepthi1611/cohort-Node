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
type Users = {
    [key: number]: {
        name: string;
        age: number;
    }
}

const users = {
    1: { name: 'John', age: 30 },
    2: { name: 'Jane', age: 25 },
    3: { name: 'Bob', age: 40 }
}

// Record gives cleaner type to objects
type User1 = {
    name: string;
    age: number;
}

// Record is typescript's way of defining an object with a specific key type and value type, 
// it is a more concise way of defining an object with a specific key type and value type, 
// it is also more flexible than the previous example because we can use any type for the keys and values, 
// not just numbers and objects.
// Record instead of Users type
// Record takes two arguments, the first is the type of the keys and the second is the type of the values
type Users1 = Record<number, User1>;

// Map is a built-in JavaScript object that allows us to store key-value pairs and provides methods to manipulate them. In TypeScript, 
// we can use the Map type to define the types of the keys and values in a Map object.
const usersMap1 = new Map()
usersMap1.set(1, { name: 'John', age: 30 });
usersMap1.set(2, { name: 'Jane', age: 25 });
usersMap1.set(3, { name: 'Bob', age: 40 });

usersMap1.get(1); // { name: 'John', age: 30 }
usersMap1.delete(2); // true

// Map is more flexible than Record because it allows us to use any type for the keys and values, 
// not just numbers and objects. However, Record is more concise and easier to read when we know the types of the keys and values in advance.
// initialize a Map with specific types for keys and values
const usersMap = new Map<number, User1>();
usersMap.set(1, { name: 'John', age: 30 });
usersMap.set(2, { name: 'Jane', age: 25 });
usersMap.set(3, { name: 'Bob', age: 40 });

usersMap.get(1); // { name: 'John', age: 30 }
usersMap.delete(2); // true

// Exclude API
type eventTypes = 'click' | 'hover' | 'scroll' | 'keydown';

// exclude takes a type and a union of types and returns a new type that excludes the types in the union
type mouseEventTypes = Exclude<eventTypes, 'keydown'>; // 'click' | 'hover' | 'scroll'

const handleEvent = (event: mouseEventTypes) => { 
    // handle mouse events
}

// Extract API
// extract takes a type and a union of types and returns a new type that includes only the types in the union
type keyboardEventTypes = Extract<eventTypes, 'keydown'>; // 'keydown'

// Type inference in Zod - check slides