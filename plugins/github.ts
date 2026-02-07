import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import schema from "@/@types/github";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext(async (_, previous) => {
  return {
    headers: {
      ...previous.headers,
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  };
});

export const githubClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  cache: new InMemoryCache({
    possibleTypes: schema.possibleTypes,
  }),
  link: from([authLink, httpLink]),
});
