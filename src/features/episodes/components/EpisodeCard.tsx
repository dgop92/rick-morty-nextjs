import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import Button, { ButtonProps } from "@mui/material/Button";
import { Episode } from "../types";

// eslint-disable-next-line react/display-name
const TextButtonLink = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ href, ...props }, ref) => {
    return <Button color="primary" variant="text" href={href} ref={ref} {...props} />;
  }
);

export function EpisodeCard({ id, airDate, episodeSeason, name }: Episode) {
  const season = episodeSeason.slice(1, 3);
  const episode = episodeSeason.slice(4);
  return (
    <Paper sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "titleFontFamily",
          fontSize: "1.5rem",
          mb: 1,
          color: "primary.contrastText",
          backgroundColor: "primary.dark",
          p: 2,
        }}
      >
        {name}
      </Typography>
      <Stack p={2} flexGrow={1}>
        <Typography variant="body1">Air Date: {airDate}</Typography>
        <Typography variant="body1">Season: {season}</Typography>
        <Typography variant="body1">Episode: {episode}</Typography>
      </Stack>
      <Link href={`/episodes/${id}/characters`} passHref>
        <TextButtonLink
          sx={{ width: "fit-content", alignSelf: "flex-end", mb: 0.5, mx: 1 }}
        >
          View characters
        </TextButtonLink>
      </Link>
    </Paper>
  );
}
