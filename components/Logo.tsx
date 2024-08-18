import React from 'react';
import NextLink from 'next/link';
import Typography from '@mui/material/Typography';
import config from '@/config';

const Logo = () => (
  <Typography
    variant="h6"
    noWrap
    component={NextLink}
    href="/"
    sx={{
      mr: 0,
      display: 'flex',
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.2rem',
      color: 'inherit',
      textDecoration: 'none',
      textTransform: 'uppercase',
    }}
  >
    {config.siteName}
  </Typography>
);

export default Logo;
