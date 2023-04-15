import { githubClient } from '@/plugins/github';
import { fetchArticle } from '@/plugins/dev-to';
import { AllPinnedRepositoriesQuery, AllPinnedRepositoriesQueryVariables, PinnedRepositoryFragment } from '@/@types/github';
import AllPinnedRepositories from './queries/all-pinned-repositories.github.graphql';

// eslint-disable-next-line no-underscore-dangle
const isRepository = (value: any): value is PinnedRepositoryFragment => value.__typename === 'Repository';

type Repository = {
  url: string,
  icon: string,
  name: string,
  href: string,
  description: string,
  owner: {
    name: string,
    href: string,
  },
  languages: Array<{
    name: string,
    color: string,
  }>
}
const fetchGithubPinnedRepositoryData = async (): Promise<Repository[]> => {
  const {
    data: {
      user: {
        pinnedItems: {
          nodes,
        },
      },
    },
  } = await githubClient.query<AllPinnedRepositoriesQuery, AllPinnedRepositoriesQueryVariables>({
    query: AllPinnedRepositories,
    variables: {
      owner: 'alfredosalzillo',
    },
  });
  return nodes
    .filter(isRepository)
    .map((repository) => ({
      icon: '/assets/icons/github_badge.svg',
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

type Article = {
  url: string,
  icon: string,
  slug: string,
  title: string,
  cover: string,
  href: string,
  description: string,
  user: {
    name: string,
    username: string,
    href: string,
    profileImage: string,
  },
}

const isDevTo = (url: string) => /dev\.to/.test(url);
const fetchDevToArticleData = async (url: string): Promise<Article> => {
  const { host, pathname } = new URL(url);
  if (!isDevTo(host)) throw new Error(`Url ${url} is not a dev.to url`);
  const [, username, slug] = pathname.split('/');
  const data = await fetchArticle(username, slug);
  return {
    url,
    icon: '/assets/icons/dev-to_badge.svg',
    title: data.title,
    slug: data.slug,
    cover: data.cover_image,
    href: url,
    description: data.description,
    user: {
      name: data.user.name,
      username: data.user.username,
      href: `https://dev.to/${data.user.username}`,
      profileImage: data.user.profile_image_90,
    },
  };
};

export type Data = {
  articles: Article[],
  repositories: Repository[],
}

export const fetchData = async (): Promise<Data> => {
  const articles = await Promise.all([
    fetchDevToArticleData('https://dev.to/alfredosalzillo/a-game-of-blobs-dead-or-alive-2alj'),
    fetchDevToArticleData('https://dev.to/alfredosalzillo/the-only-thing-you-need-is-reduce-318a'),
    fetchDevToArticleData('https://dev.to/alfredosalzillo/the-react-context-hell-7p4'),
    fetchDevToArticleData('https://dev.to/alfredosalzillo/styled-web-components-45ph'),
    fetchDevToArticleData('https://dev.to/alfredosalzillo/react-like-hooks-for-flutter-implementation-4cjm'),
  ]);
  const repositories = await fetchGithubPinnedRepositoryData();
  return {
    articles,
    repositories,
  };
};
