import React from 'react'
import './ArticlePreview.css'

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
    <section
      className="ArticlePreview--root"
      style={{ backgroundImage: `url(${cover})`}}
    >
      <div className="ArticlePreview--content">
        <h2 className="ArticlePreview--title">
          {title}
        </h2>
        <p className="ArticlePreview--description">
          {description}
        </p>
        <p className="ArticlePreview--breadcrumbs">
          <img src={icon} alt="icon" />
          <a href={user.href}>
            {user.username}
          </a>
          <span>/</span>
          <a href={href}>
            {slug}
          </a>
        </p>
      </div>
    </section>
  )
}

export default ArticlePreview
