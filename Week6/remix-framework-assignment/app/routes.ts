//import { type RouteConfig, index } from "@react-router/dev/routes";

import { index, route } from "@react-router/dev/routes";

export default [
    
    route("home", "routes/home.tsx"),

    index("routes/_index.tsx"),
    // route("posts/:postId", "routes/posts.$postId.tsx"),
    route("posts/:slug", "routes/posts.$slug.tsx"),

    // ✅ Nested routing for tags:
    route("tags", "routes/tags.tsx", [
        route(":tag", "routes/tags.$tag.tsx"),
    ]),

    ];
