import React from 'react';
import Container from '@mui/material/Container';
import Icon from '@mui/material/Icon';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Dev from '@/icons/Dev';
import Github from '@/icons/Github';
import Linkedin from '@/icons/Linkedin';
import Twitter from '@/icons/Twitter';

const ProfileCard = () => (
  <Container disableGutters>
    <Typography paragraph>
      🇮🇹  · 27 December 1993 · Developer at
      {' '}
      <Link href="https://www.treedom.net" target="_blank" rel="noreferrer">
        <strong>
          Treedom
        </strong>
      </Link>
      {' · '}
      <Link href="https://alfredosalzillo.me/resume/alfredo-salzillo-resume.pdf" target="_blank" rel="noreferrer">
        resume
      </Link>
    </Typography>
    <Stack direction="row" gap={1}>
      <Link href="https://www.linkedin.com/in/alfredosalzillo/" target="_blank" rel="noreferrer">
        <Icon>
          <Linkedin />
        </Icon>
      </Link>
      <Link href="https://twitter.com/noctislupo93" target="_blank" rel="noreferrer">
        <Icon>
          <Twitter />
        </Icon>
      </Link>
      <Link href="https://github.com/alfredosalzillo" target="_blank" rel="noreferrer">
        <Icon>
          <Github />
        </Icon>
      </Link>
      <Link href="https://dev.to/alfredosalzillo" target="_blank" rel="noreferrer">
        <Icon>
          <Dev />
        </Icon>
      </Link>
    </Stack>
  </Container>
);

export default ProfileCard;
