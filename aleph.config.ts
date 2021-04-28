import { config } from "https://deno.land/x/dotenv/mod.ts"
import type { Config } from 'https://deno.land/x/aleph@v0.3.0-alpha.32/types.ts'
import graphqlPlugin from "./plugins/graphql.ts"

const env = config({
  export: true,
});
const {
  GITHUB_TOKEN,
} = Deno.env.toObject()

export default (): Config => ({
  ssr: true,
  env,
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  plugins: [
    graphqlPlugin({
      endpoint: 'https://api.github.com/graphql',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      variables: {
        owner: 'alfredosalzillo',
      },
    }),
  ],
})
