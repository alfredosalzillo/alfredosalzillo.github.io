import type { FC } from 'react';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type Language = {
  name: string,
  color: string,
};
type RepositoryPreviewCardProps = {
  icon: string,
  name: string,
  href: string,
  description: string,
  owner: {
    name: string,
    href: string,
  },
  languages: Language[],
};
const RepositoryPreviewCard: FC<RepositoryPreviewCardProps> = ({
  icon,
  name,
  href,
  owner,
  description,
  languages = [],
}) => (
  <Card component="article" variant="outlined">
    <CardContent>
      <Breadcrumbs>
        <Avatar src={icon} sx={{ width: 24, height: 24 }} />
        <Link href={owner.href} target="_blank" rel="noreferrer">
          {owner.name}
        </Link>
        <Link href={href} target="_blank" rel="noreferrer">
          {name}
        </Link>
      </Breadcrumbs>
      <Typography paragraph mt={2}>
        {description}
      </Typography>
      <Stack direction="row" spacing={1}>
        {languages.map((language) => (
          <Chip
            key={language.name}
            label={language.name}
            sx={{
              color: language.color,
            }}
            size="small"
            variant="outlined"
          />
        ))}
      </Stack>
    </CardContent>
  </Card>
);

export default RepositoryPreviewCard;
