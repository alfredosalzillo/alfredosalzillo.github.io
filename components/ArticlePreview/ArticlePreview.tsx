import React from 'react'
// import './ArticlePreview.css'
import classes from './ArticlePreview.module.css'
type ArticlePreviewProps = {
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

const ArticlePreview = (props: ArticlePreviewProps) => {
  const {
    href,
    icon,
    title,
    slug,
    cover,
    description,
    user,
  } = props;
  return (
    <article
      className={classes.root}
      style={{ backgroundImage: `url(${cover})`}}
    >
      <div className={classes.content}>
        <h3 className={classes.title}>
          {title}
        </h3>
        <p className={classes.description}>
          {description}
        </p>
        <p className={classes.breadcrumbs}>
          <img src={icon} alt="icon" />
          <a href={user.href} target="_blank">
            {user.username}
          </a>
          <span>/</span>
          <a href={href} target="_blank">
            {slug}
          </a>
        </p>
      </div>
    </article>
  )
}

export default ArticlePreview
