import { config } from "https://deno.land/x/dotenv/mod.ts";
import graphqlPlugin from "./plugins/graphql.ts";

export default {
  ssr: true,
  env: config({
    export: true,
  }),
  plugins: [
    graphqlPlugin({
      endpoint: 'https://api.github.com/graphql',
      headers: {
        Authorization: 'Bearer '+Deno.env.get('GITHUB_TOKEN'),
      },
      variables: {
        owner: 'alfredosalzillo',
      },
    }),
  ],
}
