import React from 'react'
import classes from './ProfileCard.module.css'
import Linkedin from '../../icons/Linkedin.tsx';
import Twitter from '../../icons/Twitter.tsx';
import Github from '../../icons/Github.tsx';
import Dev from '../../icons/Dev.tsx';

const ProfilePicture = () => (
  <img
    alt="Alfredo Salzillo profile photo"
    src="/profile-picture.jpg"
    style={{
      objectFit: 'cover'
    }}
    width={100}
    height={100}
  />
)

const ProfileCard = () => (
  <article className={classes.root}>
    <div className={classes.pictureContainer}>
      <ProfilePicture />
    </div>
    <div>
      <h2 className={classes.title}>Alfredo Salzillo</h2>
      <span className={classes.info}>
        🇮🇹  · 27 December 1993 · Developer at <a href="https://www.togetherprice.com" target="_blank">
          <strong>
            Together Price
          </strong>
        </a>
      </span>
      <p>
        An Italian web developer, open source enthusiast.
      </p>
      <div className={classes.links}>
        <a href="https://www.linkedin.com/in/alfredosalzillo/" target="_blank">
          <Linkedin className={classes.icon} />
        </a>
        <a href="https://twitter.com/noctislupo93" target="_blank">
          <Twitter className={classes.icon} />
        </a>
        <a href="https://github.com/alfredosalzillo" target="_blank">
          <Github className={classes.icon} />
        </a>
        <a href="https://dev.to/alfredosalzillo" target="_blank">
          <Dev className={classes.icon} />
        </a>
      </div>
    </div>
  </article>
)

export default ProfileCard