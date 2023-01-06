import { config } from "https://deno.land/x/dotenv/mod.ts"
import { serve } from "aleph/react-server";
import MDXLoader from "aleph/react/mdx-loader";

import remarkFrontmatter from "https://esm.sh/remark-frontmatter@4.0.1";
import remarkGFM from "https://esm.sh/remark-gfm@3.0.1";
import rehypeHighlight from "https://esm.sh/rehype-highlight@5.0.2";
import rehypeSlug from "https://esm.sh/rehype-slug@5.0.1";
import { CssModuleLoader } from "./plugins/css-modules/css-modules.ts";
import {GraphQlLoader} from "./plugins/graphql.ts";

config({
  export: true,
});
const {
  GITHUB_TOKEN,
} = Deno.env.toObject()

serve({
  loaders: [
    new GraphQlLoader({
      endpoint: 'https://api.github.com/graphql',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      variables: {
        owner: 'alfredosalzillo',
      },
    }),
    new CssModuleLoader({}),
    new MDXLoader({
      remarkPlugins: [remarkFrontmatter, remarkGFM],
      rehypePlugins: [rehypeHighlight, rehypeSlug],
      providerImportSource: "@mdx-js/react",
    }),
  ],
  router: {
    glob: "./routes/**/*.{tsx,mdx,md}",
  },
  ssr: true
});
