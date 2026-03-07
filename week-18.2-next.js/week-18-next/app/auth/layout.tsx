export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Auth Layout</h1>
      {children}
    </div>
  );
}

// if we want to use the layout page for all the pages in the auth folder, 
// we can create a layout.tsx file in the auth folder and export the layout component from there. 
// This way, we don't have to import the layout component in each page and wrap the page component with it. 
// Next.js will automatically use the layout component for all the pages in the auth folder and the path would be /auth/login, /auth/register, etc.
// if we don't want the path to be /auth/login, /auth/register, etc. and we want it to be /login, /register, etc. 
// then we can create a layout.tsx file in the auth folder as (auth) instead of auth and export the layout component from there.