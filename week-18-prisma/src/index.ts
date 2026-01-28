// new syntax
import dotenv from 'dotenv'
dotenv.config()

import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from './generated/prisma/client.js'

const connectionString = process.env.DATABASE_URL

if(!connectionString) {
  throw new Error("DATABASE_URL is not defined in environment variables")
}

const adapter = new PrismaPg({connectionString})
const prisma = new PrismaClient({adapter,
    log: [
    { level: "query", emit: "stdout" }, // to observe raw sql queries
    { level: "info", emit: "stdout" },
    { level: "warn", emit: "stdout" },
    { level: "error", emit: "stdout" },
    ],
})

async function createUser() {
    const user = await prisma.user.create({
        data: {
            username: "Dad",
            age: 34,
            password: "12345",
            city: "Bangalore"
        }
    })

    console.log(user, 'user details')
}

// await createUser()

async function deleteUser() {
    await prisma.user.delete({
        where: {
            id:1
        }
    })
}

async function updateUser() {
    await prisma.user.update({
        where: {
            id:2
        },
        data: {
            username: "random"
        }
    })
}

async function getUser() {
    const user = await prisma.user.findFirst({
        where: {
            id:1
        },
        select : {
            username: true, // gives only username from the user table
        },
    })
}

async function getUserwithTodos() {
    const user = await prisma.user.findFirst({
        where: {
            id:1
        },
        include: {
            todos: true // gives all todos related to that user
        }
    })
    console.log(user, 'user with todos')
}

// getUserwithTodos()

async function getUserWithTodosSpecificFields() {
    const userwithTodos = await prisma.user.findFirst({
        where: {
            id:1
        },
        select : {
            username: true, // gives only username from the user table
            todos: {
                select: {
                    description: true // gives only description field from todos table
                }
            }
        },
    })
    console.log(userwithTodos, 'user with todos specific fields')
}

getUserWithTodosSpecificFields()

async function deleteUsers() {
    await prisma.user.findMany({
        where: {
            password: "12345"
        }
    })
}


// old syntax
// import { PrismaClient } from "./generated/prisma/client.js";
// // prisma client lets us to connect to postgres db
 
// // creating instance of prisma client class
// const client = new PrismaClient();
 
// async function createUser() {
//     await client.user.create({
//         data: {
//             username: "shobha",
//             password: "123456",
//             age: 34
 
//         }
//     })
// }
 
// await createUser();