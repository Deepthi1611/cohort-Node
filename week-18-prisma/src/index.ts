import dotenv from 'dotenv'
dotenv.config()

import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from './generated/prisma/client.js'

const connectionString = process.env.DATABASE_URL

if(!connectionString) {
  throw new Error("DATABASE_URL is not defined in environment variables")
}

const adapter = new PrismaPg({connectionString})
const prisma = new PrismaClient({adapter})

async function createUser() {
    const user = await prisma.user.create({
        data: {
            username: "srikar",
            age: 21,
            password: "secure password"
        }
    })

    console.log(user)
}

createUser()