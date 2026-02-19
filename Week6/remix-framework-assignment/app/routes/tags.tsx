import { Link, Outlet, useLoaderData } from "react-router";
import { getAllTags } from "../lib/posts.server";

export async function loader() {
  const tags = await getAllTags();
  return { tags };
}

export default function TagsLayout() {
  const { tags } = useLoaderData() as { tags: string[] };

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1>Tags</h1>
      <p style={{ opacity: 0.8 }}>
        Nested routing example: select a tag to view posts inside this layout.
      </p>

      <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", marginTop: "1rem" }}>
        {tags.map((t) => (
          <Link
            key={t}
            to={`/tags/${t}`}
            style={{
              padding: ".35rem .65rem",
              border: "1px solid #ddd",
              borderRadius: 999,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            #{t}
          </Link>
        ))}
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        {/* Child route content renders here */}
        <Outlet />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          ← Back to Blog
        </Link>
      </div>
    </main>
  );
}