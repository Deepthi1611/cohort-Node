import {z} from 'zod';

let body = {
    email: 'deepthi@gmail.com',
    name: 'Deepthi',
    password: 'deepthi123',
}

// Define a schema for a req object
const reqBody = z.object({
    email: z.string().email('Invalid email address').min(5, 'Email must be at least 5 characters long').max(50, 'Email must be at most 50 characters long'),
    name: z.string().min(3, 'Name must be at least 3 characters long').max(100, 'Name must be at most 100 characters long'),
    password: z.string()
    .min(6, "Password must be at least 6 characters long")
    .max(30, "Password must be at most 30 characters long")
    .regex(/[A-Z]/, "Must include uppercase letter")
    .regex(/[a-z]/, "Must include lowercase letter")
    .regex(/\d/, "Must include at least one number")
    .regex(/[^a-zA-Z0-9]/, "Must include special character"),
});
// parsing the data
// const parsedData = reqBody.parse(body)
const parsedDataSafe = reqBody.safeParse(body) // it returns two things - success and data or error

if(parsedDataSafe.success){
    console.log('Parsed data is successful');
} else {
    console.log('Parsed data failed');
    console.log(parsedDataSafe.error);
}