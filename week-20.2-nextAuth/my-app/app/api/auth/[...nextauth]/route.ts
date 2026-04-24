import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
  CredentialsProvider({
    // what should be shown on the sign in form (e.g. "Sign in with...")
    name: 'Credentials',
    // what are the input fields we expect on the sign in form (e.g. domain, username, password...)
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" },
    //   adminPassword: { label: "Admin Password", type: "password" }
    },
    // the authorize callback is where you should verify the credentials and 
    // return the user object if valid, or null if invalid
    async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const userName = credentials?.username
        const password = credentials?.password

        console.log("username: ", userName)
        console.log("password: ", password)

        // db request to check if the username and password are correct
        const user = {
            id: '1',
            name: 'John Smith',
            email: 'john@gmail.com'
        }
         if(user) return user
         else return null
    }
  }),

  GoogleProvider({
    clientId: 'dfgdhfdhf',
    clientSecret: 'secret'
  })
]
})

// export { handler as GET, handler as POST }

export const GET = handler
export const POST = handler

// the above page gives default login page at http://localhost:3000/api/auth/signin
// you can also create a custom login page and pass the url of that page in the signIn function in the client side code.