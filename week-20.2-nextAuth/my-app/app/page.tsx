// "use client";

// import {SessionProvider, useSession, signIn, signOut} from "next-auth/react";

// export default function Home() {
//   return (
//     <SessionProvider>
//       <RealHome />
//     </SessionProvider>
//   );
// }

// function RealHome() {
//   const session = useSession();

//   if (session) {
//     return (
//       <div>
//         {JSON.stringify(session)}
//         <h1>Welcome, {session?.data?.user?.name}</h1>
//         <button onClick={() => signOut()}>Sign out</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>You are not signed in</h1>
//       <button onClick={() => signIn()}>Sign in</button>
//     </div>
//   );
// }

// the above is the client side way of doing it, but we can also do it on the server side, which is more efficient and secure, 
// as we don't have to expose the session data to the client side, and we can also use the session data to fetch data from the database or other APIs, 
// without having to make additional requests from the client side.

import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
 
export default async function Home() {
  const session = await getServerSession();
  return (
    <div>{JSON.stringify(session)}</div>
  );
}
