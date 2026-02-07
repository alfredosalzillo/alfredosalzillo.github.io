import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArticlePreviewCard from "@/components/ArticlePreviewCard";
import RepositoryPreviewCard from "@/components/RepositoryPreviewCard";
import config from "@/config";
import { fetchArticleData } from "@/plugins/dev-to/fetchArticleData";
import { fetchPinnedRepositoryData } from "@/plugins/github/fetchPinnedRepositoryData";

const fetchArticles = async () => {
  return Promise.all(config.articles.map(fetchArticleData));
};
const HomePage = async () => {
  const repositories = await fetchPinnedRepositoryData();
  const articles = await fetchArticles();
  return (
    <main>
      <Stack spacing={1}>
        <Container disableGutters>
          <Typography variant="h2" mt={2} mb={3}>
            Articles
          </Typography>
          <Stack spacing={1}>
            {articles.map((article) => (
              <ArticlePreviewCard key={article.url} {...article} />
            ))}
          </Stack>
        </Container>
        <Container disableGutters>
          <Typography variant="h2" mt={2} mb={3}>
            Projects
          </Typography>
          <Stack spacing={1}>
            {repositories.map((repository) => (
              <RepositoryPreviewCard key={repository.url} {...repository} />
            ))}
          </Stack>
        </Container>
      </Stack>
    </main>
  );
};

export default HomePage;
