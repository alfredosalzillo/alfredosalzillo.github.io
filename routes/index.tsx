import React from 'react'
import { getData, Data } from '../lib/use-data.ts';
import { useData } from 'aleph/react'
import RepositoryPreview from '../components/RepositoryPreview/RepositoryPreview.tsx';
import ArticlePreview from '../components/ArticlePreview/ArticlePreview.tsx';
import ProfileCard from '../components/ProfileCard/ProfileCard.tsx';
import Linkedin from '../icons/Linkedin.tsx';
import Twitter from '../icons/Twitter.tsx';
import Github from '../icons/Github.tsx';
import Header from '../components/Header/Header.tsx';

export const data = {
  get: getData,
}

export default function Home() {
  const { data: { articles, repositories } } = useData<Data>()
  return (
    <div className="page">
      <Header />
      <section>
        <h2>Author</h2>
        <ProfileCard />
      </section>
      <section>
        <h2>Articles</h2>
        {articles.map((article) => (
          <ArticlePreview
            key={article.url}
            {...article}
          />
        ))}
      </section>
      <section>
        <h2>Projects</h2>
        {repositories.map((repository) => (
          <RepositoryPreview
            key={repository.url}
            {...repository}
          />
        ))}
      </section>
      <hr />
      <footer>
        <a href="https://www.linkedin.com/in/alfredosalzillo/" target="_blank">
          <Linkedin />
        </a>
        <a href="https://twitter.com/noctislupo93" target="_blank">
          <Twitter />
        </a>
        <a href="https://github.com/alfredosalzillo" target="_blank">
          <Github />
        </a>
      </footer>
    </div>
  )
}
