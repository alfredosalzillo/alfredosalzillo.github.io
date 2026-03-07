import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema: [
    {
      "https://api.github.com/graphql": {
        headers: {
          "User-Agent": "node.js",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
  ],
  generates: {
    "./schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
