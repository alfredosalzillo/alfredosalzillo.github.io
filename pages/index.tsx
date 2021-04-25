import React from 'react'
import { useData } from '../lib/use-data.ts';
import RepositoryPreview from '../components/RepositoryPreview/RepositoryPreview.tsx';
import ArticlePreview from '../components/ArticlePreview/ArticlePreview.tsx';
import { getFlagEmoji } from '../lib/flag-emoji.ts';
import Linkedin from '../components/icons/Linkedin.tsx';
import Twitter from '../components/icons/Twitter.tsx';
import Github from '../components/icons/Github.tsx';

export default function Home() {
  const { articles, repositories } = useData()
  return (
    <div className="page">
      <h1>Alfredo Salzillo</h1>
      <p>
        🌎 Caserta
        {' '}
        {getFlagEmoji('IT')}
        <br />
        🎂 1993/12/27
        <br />
        💻
        {' '}
        <strong>Web Developer</strong>
        {' '}
        at
        {' '}
        <a href="https://www.togetherprice.com" target="_blank">
          <strong>
            Together Price
          </strong>
        </a>
        <br />
        👍
        {' '}
        <a href="/assets/resume.pdf"><strong>resume</strong></a>
      </p>
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
