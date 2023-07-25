import React from 'react';
import Linkedin from '@/icons/Linkedin';
import Twitter from '@/icons/Twitter';
import Github from '@/icons/Github';
import Dev from '@/icons/Dev';
import classes from './ProfileCard.module.css';

function ProfileCard() {
  return (
    <div className={classes.root}>
      <div>
        <h2 className={classes.title}>Alfredo Salzillo</h2>
        <span className={classes.info}>
          🇮🇹  · 27 December 1993 · Developer at
          {' '}
          <a href="https://www.treedom.net" target="_blank">
            <strong>
              Treedom
            </strong>
          </a>
        </span>
        <p>
          An Italian web developer, open source enthusiast.
        </p>
        <p>
          <a href="https://alfredosalzillo.me/resume/alfredo-salzillo-resume.pdf" target="_blank">
            <strong>
              resume
            </strong>
          </a>
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
    </div>
  );
}

export default ProfileCard;
