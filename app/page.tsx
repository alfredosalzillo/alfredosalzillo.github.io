import Header from '@/components/Header';
import ProfileCard from '@/components/ProfileCard';
import ArticlePreview from '@/components/ArticlePreview';
import RepositoryPreview from '@/components/RepositoryPreview';
import Linkedin from '@/icons/Linkedin';
import Twitter from '@/icons/Twitter';
import Github from '@/icons/Github';
import React from 'react';
import { fetchData } from '@/lib/data';
import classes from './page.module.css'

export default async function Home() {
  const { articles, repositories } = await fetchData();
  return (
    <main>
      <Header />
      <div className={classes.content}>
        <div className={classes.infos}>
          <section>
            <ProfileCard />
          </section>
        </div>
        <div className={classes.main}>
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
        </div>
      </div>
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
    </main>
  );
}
