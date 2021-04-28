import React from 'react'
import classes from './RepositoryPreview.module.css'

type Language = {
  name: string,
  color: string,
}
type RepositoryPreviewProps = {
  icon: string,
  name: string,
  href: string,
  description: string,
  owner: {
    name: string,
    href: string,
  },
  languages: Language[],
}
const RepositoryPreview = (props: RepositoryPreviewProps) => {
  const {
    icon,
    name,
    href,
    owner,
    description,
    languages = [],
  } = props
  return (
    <article className={classes.root}>
      <h3 className={classes.title}>
        <img alt="logo" src={icon} />
        <a href={owner.href} target="_blank">
          {owner.name}
        </a>
        <span>/</span>
        <a href={href} target="_blank">
          {name}
        </a>
      </h3>
      <p>
        {description}
      </p>
      <div className={classes.tags}>
        {languages.map((language) => (
          <span key={language.name} className={classes.tag}>
            <span
              className={classes.tagDot}
              style={{
                background: language.color,
              }}
            />
            {' '}
            {language.name}
        </span>
        ))}
      </div>
    </article>
  )
}

export default RepositoryPreview;
