import type { FragmentOf } from "gql.tada";
import { githubClient } from "@/plugins/github/github";
import { graphql, readFragment } from "@/plugins/graphq";

const PinnedRepositoryFragment = graphql(`
    fragment PinnedRepository on Repository {
        name
        nameWithOwner
        description
        url
        owner {
            login
            avatarUrl
            url
        }
        languages(first: 10) {
            nodes {
                name
                color
            }
        }
    }
`);
const AllPinnedRepositories = graphql(
  `
    query AllPinnedRepositories($owner: String!) {
        user(login: $owner) {
            pinnedItems(first: 10) {
                nodes {
                    __typename
                    ...PinnedRepository
                }
            }
        }
    }
`,
  [PinnedRepositoryFragment],
);

const getPinnedRepository = (
  data: FragmentOf<typeof PinnedRepositoryFragment>,
) => {
  // Unmasks the fragment and casts to the result type of `bookFragment`
  // This is intersected with `| null` in this case, due to the input type.
  return readFragment(PinnedRepositoryFragment, data);
};

export type Repository = {
  url: string;
  icon: string;
  name: string;
  href: string;
  description: string;
  owner: {
    name: string;
    href: string;
  };
  languages: Array<{
    name: string;
    color: string;
  }>;
};
export const fetchPinnedRepositoryData = async (): Promise<Repository[]> => {
  const { data } = await githubClient.query({
    query: AllPinnedRepositories,
    variables: {
      owner: "alfredosalzillo",
    },
  });
  if (!data?.user?.pinnedItems?.nodes) {
    return [];
  }
  return data.user.pinnedItems.nodes
    .filter((node) => !!node)
    .filter((node) => node.__typename === "Repository")
    .map((node) => getPinnedRepository(node))
    .map(
      (repository) =>
        ({
          icon: "/assets/icons/github_badge.svg",
          url: repository.url,
          name: repository.name,
          href: repository.url,
          description: repository.description ?? "",
          owner: {
            name: repository.owner.login,
            href: repository.owner.url,
          },
          languages: repository.languages?.nodes ?? [],
        }) as Repository,
    );
};
