import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import RepositoryPreviewCard from "@/components/RepositoryPreviewCard";
import { fetchPinnedRepositoryData } from "@/plugins/github/fetchPinnedRepositoryData";

const HomePage = async () => {
  const repositories = await fetchPinnedRepositoryData();
  return (
    <main>
      <Stack spacing={1}>
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
