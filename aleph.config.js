import { config } from "https://deno.land/x/dotenv/mod.ts";

export default {
  ssr: true,
  env: config(),
  plugins: [],
}
