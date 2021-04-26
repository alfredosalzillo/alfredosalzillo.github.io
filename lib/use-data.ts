import { useDeno } from 'framework/react';
import { getArticle } from './dev-to.ts';
import allPinnedRepositories  from '../data/github.graphql'
import type { PinnedRepositoryQueryResponse }  from '../data/github.graphql.ts'

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
}
const getGithubPinnedRepositoryData =  async (): Promise<Repository[]> => {
  const {
    data: {
      user: {
        pinnedItems: {
          nodes: repositories,
        }
      }
    }
  } = (allPinnedRepositories as PinnedRepositoryQueryResponse)
  return repositories.map((repository) => ({
    icon: '/icons/github_badge.svg',
    url: repository.url,
    name: repository.name,
    href: repository.url,
    description: repository.description,
    owner: {
      name: repository.owner.login,
      href: repository.owner.url,
    }
  }))
}

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

const isDevTo = (url: string) => /dev\.to/.test(url)
const getDevToArticleData = async (url: string): Promise<Article> => {
  const { host, pathname } = new URL(url)
  if (!isDevTo(host)) return null;
  const [, username, slug] = pathname.split('/')
  const data = await getArticle(username, slug)
  return {
    url,
    icon: '/icons/dev-to_badge.svg',
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
    }
  }
}

type Data = {
  articles: Article[],
  repositories: Repository[],
}
export const useData = (): Data => {
  return useDeno(async () => {
    const articles = await Promise.all([
      getDevToArticleData('https://dev.to/alfredosalzillo/the-react-context-hell-7p4'),
      getDevToArticleData('https://dev.to/alfredosalzillo/styled-web-components-45ph'),
      getDevToArticleData('https://dev.to/alfredosalzillo/react-like-hooks-for-flutter-implementation-4cjm'),
    ])
    const repositories = await getGithubPinnedRepositoryData()
    return {
      articles,
      repositories,
    }
  })
}
