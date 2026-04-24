"use client";

import {SessionProvider, useSession, signIn, signOut} from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <RealHome />
    </SessionProvider>
  );
}

function RealHome() {
  const session = useSession();

  if (session) {
    return (
      <div>
        {JSON.stringify(session)}
        <h1>Welcome, {session?.data?.user?.name}</h1>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <h1>You are not signed in</h1>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}
