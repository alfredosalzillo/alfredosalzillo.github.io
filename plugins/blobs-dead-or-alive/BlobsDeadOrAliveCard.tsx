"use client";

import type { FC } from "react";
import { useState } from "react";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import RefreshIcon from "@mui/icons-material/Refresh";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import type { BlobDescriptor } from "@alfredo.salzillo/blobs";
import { generateBlob } from "@alfredo.salzillo/blobs";
import Blob from "@alfredo.salzillo/blobs/Blob";
import wantedPosterImg from "./wanted-poster.webp";

type BlobsDeadOrAliveCardProps = {
  initialBlob: BlobDescriptor;
};

const BlobsDeadOrAliveCard: FC<BlobsDeadOrAliveCardProps> = ({
  initialBlob,
}) => {
  const [blob, setBlob] = useState(() => initialBlob);

  const handleRegenerate = () => {
    setBlob(generateBlob(blob.width, blob.height));
  };

  return (
    <Card component="article" variant="outlined">
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              position: "relative",
              minHeight: 250,
              width: "100%",
              maxWidth: "200px",
              margin: "0 auto",
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={wantedPosterImg}
              alt="Wanted Poster"
              fill
              style={{
                objectFit: "contain",
                zIndex: 0,
                pointerEvents: "none",
              }}
              priority
            />
            <Box
              sx={{
                width: "180px",
                height: "180px",
                mt: "40px",
                background: "#d7c680",
              }}
            >
              <Blob {...blob} animated />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={2}>
              <Typography variant="h5" component="h3">
                Blobs Dead or Alive
              </Typography>
              <Typography variant="body1" color="text.secondary">
                A fun and interactive game featuring procedural blobs. Challenge
                yourself to identify which blobs are "alive" and which are not!
              </Typography>
              <CardActions sx={{ px: 0, justifyContent: "space-between" }}>
                <Stack direction="row" spacing={1}>
                  <Button
                    variant="contained"
                    href="https://alfredosalzillo.me/blobs-dead-or-alive/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Play now
                  </Button>
                  <Tooltip title="Regenerate blob">
                    <IconButton
                      onClick={handleRegenerate}
                      aria-label="regenerate blob"
                    >
                      <RefreshIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
                <IconButton
                  href="https://github.com/alfredosalzillo/blobs-dead-or-alive"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github repository"
                >
                  <GitHubIcon />
                </IconButton>
              </CardActions>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BlobsDeadOrAliveCard;
