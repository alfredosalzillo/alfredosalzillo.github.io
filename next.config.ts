import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.graphql": {
        loaders: ["graphql-tag/loader"],
        as: "*.js",
      },
    },
  },
  transpilePackages: [
    "@mui/material",
    "@mui/icons-material",
    "@emotion/react",
    "@emotion/styled",
  ],
};

export default nextConfig;
