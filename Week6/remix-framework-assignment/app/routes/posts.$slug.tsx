import { Link, useLoaderData } from "react-router";
import { getPostBySlug } from "../lib/posts.server";

export async function loader({ params }: { params: { slug?: string } }) {
  const slug = params.slug;
  if (!slug) throw new Response("Missing slug", { status: 400 });

  try {
    const post = await getPostBySlug(slug);
    return { post };
  } catch {
    throw new Response("Post not found", { status: 404 });
  }
}

export default function PostPage() {
  const { post } = useLoaderData() as {
    post: { title: string; date?: string; html: string };
  };

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        ← Back
      </Link>

      <article style={{ marginTop: "1.25rem" }}>
        <h1 style={{ marginBottom: ".35rem" }}>{post.title}</h1>
        {post.date ? <p style={{ opacity: 0.7 }}>{post.date}</p> : null}

        {/* Render markdown-as-HTML */}
        <div
          style={{ marginTop: "1rem", lineHeight: 1.75 }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </main>
  );
}