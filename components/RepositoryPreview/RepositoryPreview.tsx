import React from 'react'
import './RepositoryPreview.css'

type RepositoryPreviewProps = {
  icon: string,
  name: string,
  href: string,
  description: string,
  owner: {
    name: string,
    href: string,
  },
}
const RepositoryPreview = (props: RepositoryPreviewProps) => {
  const {
    icon,
    name,
    href,
    owner,
    description
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
    </section>
  )
}

export default RepositoryPreview;
