import { graphql, GraphqlQueryParams } from './graphql.ts';

export const query = <R, V = any>(params: GraphqlQueryParams<V>, token: string): Promise<R> => fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(params),
}).then((response) => response.json()) as Promise<R>

export type PinnedRepositoryQueryResponse = {
  data: {
    user: {
      pinnedItems: {
        nodes: {
          name: string,
          nameWithOwner: string,
          description: string,
          url: string,
          owner: {
            login: string,
            avatarUrl: string,
            url: string
          }
        }[]
      }
    }
  }
}
export type AllPinnedRepositoryQueryVariables = { owner: string }
export const allPinnedRepositoryQuery = graphql<AllPinnedRepositoryQueryVariables>`
    query AllPinnedRepositories($owner: String!) {
        user(login: $owner) {
            pinnedItems(first: 10) {
                nodes {
                    ... on Repository {
                        name
                        nameWithOwner
                        description
                        url
                        owner {
                            login
                            avatarUrl
                            url
                        }
                    }
                }
            }
        }
    }
`
