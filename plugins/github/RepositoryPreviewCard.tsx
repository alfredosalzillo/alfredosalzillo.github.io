import type { FC } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Avatar from "@mui/material/Avatar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FragmentOf } from "gql.tada";
import { graphql, readFragment } from "@/plugins/github/graphq";

export const RepositoryPreviewCardFragment = graphql(`
    fragment RepositoryPreviewCard on Repository {
        name
        description
        url
        owner {
            login
            avatarUrl
            url
        }
        languages(first: 10) {
            nodes {
                name
                color
            }
        }
    }
`);

type RepositoryPreviewCardProps = {
  repository: FragmentOf<typeof RepositoryPreviewCardFragment>;
};
const RepositoryPreviewCard: FC<RepositoryPreviewCardProps> = ({
  repository,
}) => {
  const data = readFragment(RepositoryPreviewCardFragment, repository);
  return (
    <Card component="article" variant="outlined">
      <CardContent>
        <Breadcrumbs>
          <Avatar
            sx={{ width: 24, height: 24 }}
          >
            <GitHubIcon />
          </Avatar>
          <Link href={data.owner.url} target="_blank" rel="noreferrer">
            {data.owner.login}
          </Link>
          <Link href={data.url} target="_blank" rel="noreferrer">
            {data.name}
          </Link>
        </Breadcrumbs>
        <Typography component="p" mt={2} mb={2}>
          {data.description}
        </Typography>
        <Stack direction="row" spacing={1}>
          {data.languages?.nodes
            ?.filter((language) => !!language)
            ?.map((language) => (
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
};

export default RepositoryPreviewCard;
