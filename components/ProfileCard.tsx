import React from 'react';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const ProfileCard = () => (
  <Container disableGutters>
    <Typography paragraph>
      🇮🇹  · 27 December 1993 ·
      {' '}
      <Link href="https://alfredosalzillo.me/resume/alfredo-salzillo-resume.pdf" target="_blank" rel="noreferrer">
        resume
      </Link>
    </Typography>
  </Container>
);

export default ProfileCard;
