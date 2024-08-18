import React from 'react';
import Icon from '@mui/material/Icon';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Dev from '@/icons/Dev';
import Github from '@/icons/Github';
import Linkedin from '@/icons/Linkedin';
import Twitter from '@/icons/Twitter';

const SocialLinks = () => (
  <Stack direction="row" gap={1}>
    <Link href="https://www.linkedin.com/in/alfredosalzillo/" target="_blank" rel="noreferrer">
      <Icon fontSize="small">
        <Linkedin />
      </Icon>
    </Link>
    <Link href="https://twitter.com/noctislupo93" target="_blank" rel="noreferrer">
      <Icon fontSize="small">
        <Twitter />
      </Icon>
    </Link>
    <Link href="https://github.com/alfredosalzillo" target="_blank" rel="noreferrer">
      <Icon fontSize="small">
        <Github />
      </Icon>
    </Link>
    <Link href="https://dev.to/alfredosalzillo" target="_blank" rel="noreferrer">
      <Icon fontSize="small">
        <Dev />
      </Icon>
    </Link>
  </Stack>
);

export default SocialLinks;
