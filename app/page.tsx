import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { generateBlob } from "@alfredo.salzillo/blobs";
import { BlobsDeadOrAliveCard } from "@/plugins/blobs-dead-or-alive";
import DiscoverMoreCard from "@/plugins/github/DiscoverMoreCard";
import { githubClient } from "@/plugins/github/github";
import { graphql } from "@/plugins/github/graphq";
import RepositoryPreviewCard, {
  RepositoryPreviewCardFragment,
} from "@/plugins/github/RepositoryPreviewCard";

const HomeQuery = graphql(
  `
    query AllPinnedRepositories($owner: String!) {
        user(login: $owner) {
            url
            pinnedItems(first: 10) {
                nodes {
                    __typename
                    ... on Node {
                        id
                    }
                    ...RepositoryPreviewCard
                }
            }
        }
    }
`,
  [RepositoryPreviewCardFragment],
);

const HomePage = async () => {
  const { data } = await githubClient.query({
    query: HomeQuery,
    variables: {
      owner: "alfredosalzillo",
    },
  });
  const repositories = data?.user?.pinnedItems?.nodes ?? [];
  return (
    <main>
      <Stack spacing={1}>
        <Container disableGutters>
          <Typography variant="h2" mt={2} mb={3}>
            Showcase
          </Typography>
          <BlobsDeadOrAliveCard initialBlob={generateBlob(100, 100)} />
          <Typography variant="h2" mt={2} mb={3}>
            Projects
          </Typography>
          <Stack spacing={1}>
            {repositories
              .filter((repository) => !!repository)
              .filter((repository) => repository.__typename === "Repository")
              .map((repository) => (
                <RepositoryPreviewCard
                  key={repository.id}
                  repository={repository}
                />
              ))}
            {data?.user?.url && <DiscoverMoreCard url={data.user.url} />}
          </Stack>
        </Container>
      </Stack>
    </main>
  );
};

export default HomePage;
