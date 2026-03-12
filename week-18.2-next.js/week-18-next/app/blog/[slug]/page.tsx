export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
// const slug = (await params).slug;

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>This is the content of the blog post.</p>
    </div>
  );
}
