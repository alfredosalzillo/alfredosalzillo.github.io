import createClient from "openapi-fetch";
import type { paths } from "@/plugins/dev-to/schema-v1";

const client = createClient<paths>({ baseUrl: "https://dev.to/api/" });

export default client;
