import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { SetContextLink } from "@apollo/client/link/context";
import schema from "@/@types/github";

const httpLink = new HttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = new SetContextLink(async (_) => {
  return {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  };
});

export const githubClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  cache: new InMemoryCache({
    possibleTypes: schema.possibleTypes,
  }),
  link: ApolloLink.from([authLink, httpLink]),
});
