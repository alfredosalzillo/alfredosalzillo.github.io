'use client';

import React from 'react';

import NextLink from 'next/link';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { lighten, alpha } from '@mui/material/styles';

type ArticlePreviewCardProps = {
  icon: string,
  title: string,
  cover?: string,
  href: string,
  description: string,
};

const ArticlePreviewCard: React.FC<ArticlePreviewCardProps> = ({
  href,
  icon,
  title,
  cover,
  description,
}) => (
  <Card component="article" variant="outlined">
    <CardActionArea component={NextLink} href={href} target="_blank">
      {cover && (
        <CardMedia
          component="img"
          src={cover}
          alt={title}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectPosition: 'center',
            objectFit: 'cover',
          }}
        />
      )}
      <Box
        position="relative"
        sx={{
          background: ({ palette }) => (cover ? alpha(lighten(palette.background.default, 0.07), 0.8) : 'transparent'),
        }}
      >
        <CardHeader
          avatar={<Avatar src={icon} />}
          title={title}
        />
        <CardContent>
          {description}
        </CardContent>
      </Box>
    </CardActionArea>
  </Card>
);

export default ArticlePreviewCard;
