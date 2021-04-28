import { config } from "https://deno.land/x/dotenv/mod.ts"
import type { Config } from 'https://deno.land/x/aleph@v0.3.0-alpha.32/types.ts'
import graphqlPlugin from "./plugins/graphql.ts"

export default (): Config => ({
  ssr: true,
  env: config({
    export: true,
  }),
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
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
})
