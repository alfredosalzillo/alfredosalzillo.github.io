import React from 'react';

import Image from 'next/image';
import classes from './ArticlePreview.module.css';

type ArticlePreviewProps = {
  icon: string,
  slug: string,
  title: string,
  cover?: string,
  href: string,
  description: string,
  user: {
    name: string,
    username: string,
    href: string,
    profileImage: string,
  },
}

function ArticlePreview(props: ArticlePreviewProps) {
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
    >
      {
        cover && (
          <Image
            src={cover}
            alt={title}
            fill
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              objectFit: 'cover',
            }}
          />
        )
      }
      <div className={classes.content}>
        <h3 className={classes.title}>
          {title}
        </h3>
        <p className={classes.description}>
          {description}
          <br />
          <a href={href} target="_blank">
            read more
          </a>
        </p>
        <div className={classes.actions}>
          <Image width={24} height={24} src={icon} alt="icon" />
        </div>
        <a href={href} target="_blank" className={classes.link}>
          READ MORE
        </a>
      </div>
    </article>
  );
}

export default ArticlePreview;
