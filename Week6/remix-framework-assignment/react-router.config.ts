import type { Config } from "@react-router/dev/config";
import { getAllPostsMeta, getAllTags } from "./app/lib/posts.server";

export default {
  ssr: true,
  async prerender() {
    const posts = await getAllPostsMeta();
    const tags = await getAllTags();

    return [
      "/",
      "/tags",
      ...tags.map((t) => `/tags/${t}`),
      ...posts.map((p) => `/posts/${p.slug}`),
    ];
  },
} satisfies Config;
