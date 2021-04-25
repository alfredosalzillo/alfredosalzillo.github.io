import { useDeno } from 'framework/react';
import { getRepository } from './github.ts';
import { getArticle } from './dev-to.ts';

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
const isGithub = (url: string) => /github\.com/.test(url)
const getGithubRepositoryData = async (url: string): Promise<Repository> => {
  const { host, pathname } = new URL(url)
  if (!isGithub(host)) return null;
  const [, owner, repository] = pathname.split('/')
  const data = await getRepository(owner, repository)
  return {
    url,
    icon: '/icons/github_badge.svg',
    name: data.name,
    href: data.html_url,
    owner: {
      name: data.owner.login,
      href: data.owner.html_url,
    },
    description: data.description,
  }
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
    const repositories = await Promise.all([
      getGithubRepositoryData('https://github.com/alfredosalzillo/rollup-plugin-multi-input'),
      getGithubRepositoryData('https://github.com/alfredosalzillo/react-pendulum'),
      getGithubRepositoryData('https://github.com/alfredosalzillo/masquerades'),
      getGithubRepositoryData('https://github.com/alfredosalzillo/blobs-dead-or-alive'),
      getGithubRepositoryData('https://github.com/alfredosalzillo/resume'),
    ])
    return {
      articles,
      repositories,
    }
  })
}
