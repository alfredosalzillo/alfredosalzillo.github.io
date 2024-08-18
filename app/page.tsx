import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArticlePreviewCard from '@/components/ArticlePreviewCard';
import ProfileCard from '@/components/ProfileCard';
import RepositoryPreviewCard from '@/components/RepositoryPreviewCard';
import { fetchData } from '@/lib/data';

const HomePage = async () => {
  const { articles, repositories } = await fetchData();
  return (
    <main>
      <Stack spacing={1}>
        <ProfileCard />
        <Container disableGutters>
          <Typography variant="h2" mt={2} mb={3}>Articles</Typography>
          <Stack spacing={1}>
            {articles.map((article) => (
              <ArticlePreviewCard
                key={article.url}
                {...article}
              />
            ))}
          </Stack>
        </Container>
        <Container disableGutters>
          <Typography variant="h2" mt={2} mb={3}>Projects</Typography>
          <Stack spacing={1}>
            {repositories.map((repository) => (
              <RepositoryPreviewCard
                key={repository.url}
                {...repository}
              />
            ))}
          </Stack>
        </Container>
      </Stack>
    </main>
  );
};

export default HomePage;
