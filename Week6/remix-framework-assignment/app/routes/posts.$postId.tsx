import { Link, useLoaderData } from "react-router";

type Post = {
  id: number;
  title: string;
  body: string;
};

export async function loader({ params }: { params: { postId?: string } }) {
  const postId = params.postId;

  if (!postId) throw new Response("Missing postId", { status: 400 });

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  if (res.status === 404) throw new Response("Post not found", { status: 404 });
  if (!res.ok) throw new Response("Failed to load post", { status: 500 });

  const post: Post = await res.json();
  return { post };
}

export default function PostDetails() {
  const { post } = useLoaderData() as { post: Post };

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        ← Back to Blog
      </Link>

      <article style={{ marginTop: "1.25rem" }}>
        <h1 style={{ marginBottom: ".75rem" }}>{post.title}</h1>
        <p style={{ lineHeight: 1.7, whiteSpace: "pre-line" }}>{post.body}</p>
      </article>
    </main>
  );
}
