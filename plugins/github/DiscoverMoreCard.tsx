'use client';
import type { FC } from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface DiscoverMoreCardProps {
  url: string;
}

const DiscoverMoreCard: FC<DiscoverMoreCardProps> = ({ url }) => {
  return (
    <Card variant="outlined" component="article">
      <CardActionArea
        component={Link}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardContent>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{ py: 1 }}
          >
            <GitHubIcon fontSize="large" color="action" />
            <Typography variant="h6" color="text.secondary">
              Discover more on GitHub
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DiscoverMoreCard;
