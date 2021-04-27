import React from 'react'
import './RepositoryPreview.css'

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
    <section className="RepositoryPreview--root">
      <h2 className="RepositoryPreview--title">
        <img alt="logo" src={icon} />
        <a href={owner.href} target="_blank">
          {owner.name}
        </a>
        <span>/</span>
        <a href={href} target="_blank">
          {name}
        </a>
      </h2>
      <p>
        {description}
      </p>
      <div className="RepositoryPreview--tags">
        {languages.map((language) => (
          <span key={language.name} className="RepositoryPreview--tag">
            <span
              className="RepositoryPreview--tag-dot"
              style={{
                background: language.color,
              }}
            />
            {' '}
            {language.name}
        </span>
        ))}
      </div>
    </section>
  )
}

export default RepositoryPreview;
