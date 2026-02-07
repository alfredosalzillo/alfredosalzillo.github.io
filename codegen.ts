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
    "./@types/github.ts": {
      documents: ["./**/*.github.graphql"],
      plugins: [
        "typescript",
        "typescript-operations",
        "typed-document-node",
        "fragment-matcher",
      ],
      config: {
        avoidOptionals: {
          field: true,
          defaultValue: true,
        },
        maybeValue: "T",
      },
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
