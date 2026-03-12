export default async function BlogPostPage({ params }: 
    { 
        params: Promise<{ slug: string[] }>;
    }) {
    const { slug } = await params;
  return <div>
    <h1>Docs Post</h1>
    <p>Slug: {slug.join('/')}</p>
  </div>
}