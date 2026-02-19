import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date?: string;
  tags: string[];
};

export async function getAllPostsMeta(): Promise<PostMeta[]> {
  const files = await fs.readdir(POSTS_DIR);

  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith(".md"))
      .map(async (file) => {
        const slug = file.replace(/\.md$/, "");
        const raw = await fs.readFile(path.join(POSTS_DIR, file), "utf-8");
        const { data } = matter(raw);

        return {
          slug,
          title: String(data.title ?? slug),
          date: data.date ? String(data.date) : undefined,
          tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        };
      })
  );

  // Optional: newest first if dates exist
  posts.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
  return posts;
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);

  const raw = await fs.readFile(filePath, "utf-8"); // throws if missing
  const { data, content } = matter(raw);

  const html = marked.parse(content);

  return {
    slug,
    title: String(data.title ?? slug),
    date: data.date ? String(data.date) : undefined,
    html,
  };
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPostsMeta();
  const tagSet = new Set<string>();

  for (const p of posts) {
    for (const t of p.tags) tagSet.add(t);
  }

  return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
}

export async function getPostsByTag(tag: string) {
  const posts = await getAllPostsMeta();
  const clean = tag.trim().toLowerCase();
  return posts.filter((p) => p.tags.map((t) => t.toLowerCase()).includes(clean));
}

