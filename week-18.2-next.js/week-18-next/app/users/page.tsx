// server component
// Browser Network tab only shows browser-made calls, not server-to-server calls.
// api calls made in server components are not visible in the browser's network tab,
// but they are visible in the terminal where the Next.js server is running.
import axios from "axios";

async function getUsers() {
  // this sends a request to the Next.js server, which then sends a request to the API route 
  // defined in app/api/v1/user/details/route.ts
  const res = await axios.get("http://localhost:3000/api/v1/user/details");
  return res.data;
}

export default async function Users() {
  const users = await getUsers();
  return (
    <div>
      <h1>users</h1>
      <p>Name: {users.name}</p>
      <p>Email: {users.email}</p>
    </div>
  );
}
