// server component
// Browser Network tab only shows browser-made calls, not server-to-server calls.
// api calls made in server components are not visible in the browser's network tab,
// but they are visible in the terminal where the Next.js server is running.

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}

export default async function Users() {
  const users = await getUsers();
  return (
    <div>
      <h1>users</h1>
      {users.map((user: any) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
