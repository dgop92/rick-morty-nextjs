import { Paper, Typography } from "@mui/material";
import { Episode } from "./types";

export default function EpisodeCard({
  air_date,
  episodeSeason,
  name,
}: Episode) {
  const season = episodeSeason.slice(1, 3);
  const episode = episodeSeason.slice(4);
  return (
    <Paper sx={{ display: "flex", flexDirection: "column", p: 2, m: 1 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {name}
      </Typography>
      <Typography variant="body1">Air Date: {air_date}</Typography>
      <Typography variant="body1">Season: {season}</Typography>
      <Typography variant="body1">Episode: {episode}</Typography>
    </Paper>
  );
}
