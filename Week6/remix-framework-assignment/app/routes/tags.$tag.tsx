import { Link, useLoaderData } from "react-router";
import { getPostsByTag, type PostMeta } from "../lib/posts.server";

export async function loader({ params }: { params: { tag?: string } }) {
  const tag = params.tag;
  if (!tag) throw new Response("Missing tag", { status: 400 });

  const posts = await getPostsByTag(tag);
  return { tag, posts };
}

export default function TagPage() {
  const { tag, posts } = useLoaderData() as { tag: string; posts: PostMeta[] };

  return (
    <section>
      <h2 style={{ marginBottom: ".25rem" }}>#{tag}</h2>
      <p style={{ opacity: 0.8, marginTop: 0 }}>
        {posts.length} post{posts.length === 1 ? "" : "s"} found
      </p>

      <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
        {posts.map((p) => (
          <Link
            key={p.slug}
            to={`/posts/${p.slug}`}
            style={{
              display: "block",
              padding: "1rem",
              border: "1px solid #ddd",
              borderRadius: 12,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h3 style={{ margin: 0 }}>{p.title}</h3>
            {p.date ? <p style={{ opacity: 0.7, marginTop: ".35rem" }}>{p.date}</p> : null}

            <div style={{ marginTop: ".35rem", display: "flex", gap: ".4rem", flexWrap: "wrap" }}>
              {p.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: ".85rem",
                    opacity: 0.85,
                    border: "1px solid #eee",
                    borderRadius: 999,
                    padding: ".15rem .5rem",
                  }}
                >
                  #{t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
