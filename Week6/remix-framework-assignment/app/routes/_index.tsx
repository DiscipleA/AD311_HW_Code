import { Link, useLoaderData } from "react-router";
import { getAllPostsMeta, type PostMeta } from "../lib/posts.server";

export async function loader() {
  const posts = await getAllPostsMeta();
  return { posts };
}

export default function BlogHome() {
  const { posts } = useLoaderData() as { posts: PostMeta[] };

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1>Blog</h1>
      <p style={{ opacity: 0.8 }}>
        Posts are sourced from Markdown files and pre-rendered at build time.
      </p>

      <div style={{ display: "grid", gap: "1rem", marginTop: "1.25rem" }}>
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
            <h2 style={{ margin: 0, fontSize: "1.25rem" }}>{p.title}</h2>
            <p style={{ marginTop: ".35rem", opacity: 0.7 }}>{p.date ?? ""}</p>
          </Link>

        ))}
      </div>
      <Link to="/tags" style={{ display: "inline-block", marginTop: "1rem" }}>
        Browse Tags →
      </Link>
    </main>
  );
}

// import { Link, useLoaderData } from "react-router";

// type Post = {
//   id: number;
//   title: string;
//   body: string;
// };

// export async function loader() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
//   if (!res.ok) throw new Response("Failed to load posts", { status: 500 });

//   const posts: Post[] = await res.json();
//   return { posts };
// }

// export default function BlogHome() {
//   const { posts } = useLoaderData() as { posts: Post[] };

//   return (
//     <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
//       <h1>Blog</h1>
//       <p style={{ opacity: 0.8 }}>
//         Homepage listing posts. Click a post to view details.
//       </p>

//       <div style={{ display: "grid", gap: "1rem", marginTop: "1.25rem" }}>
//         {posts.map((post) => (
//           <Link
//             key={post.id}
//             to={`/posts/${post.id}`}
//             style={{
//               display: "block",
//               padding: "1rem",
//               border: "1px solid #ddd",
//               borderRadius: 12,
//               textDecoration: "none",
//               color: "inherit",
//             }}
//           >
//             <h2 style={{ margin: 0, fontSize: "1.25rem" }}>{post.title}</h2>
//             <p style={{ marginTop: ".5rem", opacity: 0.8 }}>
//               {post.body.slice(0, 90)}...
//             </p>
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// }
