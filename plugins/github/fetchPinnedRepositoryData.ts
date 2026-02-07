import type {
  AllPinnedRepositoriesQuery,
  AllPinnedRepositoriesQueryVariables,
  PinnedRepositoryFragment,
} from "@/@types/github";
import { githubClient } from "@/plugins/github/github";
import AllPinnedRepositories from "@/plugins/github/queries/all-pinned-repositories.github.graphql";

const isRepository = (value: unknown): value is PinnedRepositoryFragment =>
  typeof value === "object" &&
  value !== null &&
  "__typename" in value &&
  value.__typename === "Repository";

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
  const { data } = await githubClient.query<
    AllPinnedRepositoriesQuery,
    AllPinnedRepositoriesQueryVariables
  >({
    query: AllPinnedRepositories,
    variables: {
      owner: "alfredosalzillo",
    },
  });
  if (!data?.user?.pinnedItems?.nodes) {
    return [];
  }
  return data.user.pinnedItems.nodes.filter(isRepository).map((repository) => ({
    icon: "/assets/icons/github_badge.svg",
    url: repository.url,
    name: repository.name,
    href: repository.url,
    description: repository.description,
    owner: {
      name: repository.owner.login,
      href: repository.owner.url,
    },
    languages: repository.languages.nodes,
  }));
};
