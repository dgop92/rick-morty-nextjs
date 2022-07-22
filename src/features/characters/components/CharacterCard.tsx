import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Character, CharacterStatus } from "../types";
import { imageShimmer, toBase64 } from "../../../lib/imageUtils";

function getColorByStatus(status: CharacterStatus) {
  switch (status) {
    case "Alive":
      return "#4caf50";
    case "Dead":
      return "#ef5350";
    default:
      return "#9e9e9e";
  }
}

export function CharacterCard({ name, image, status }: Character) {
  const statusColor = getColorByStatus(status);

  return (
    <Paper sx={{ display: "flex", flexDirection: "column", width: 250 }}>
      <Box width={250} height={250}>
        <Image
          width={250}
          height={250}
          layout="intrinsic"
          src={image}
          alt={`${name}-logo`}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(imageShimmer(250, 250))}`}
        />
      </Box>
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontFamily: "titleFontFamily",
          fontSize: "1.5rem",
          color: "primary.contrastText",
          backgroundColor: "primary.dark",
          p: 2,
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ color: "white", backgroundColor: statusColor, p: 1 }}
      >
        {status}
      </Typography>
      {/* <Stack direction="row" justifyContent="space-between">
        <Typography variant="body1" align="center" sx={{ p: 1 }}>
          Gender:
        </Typography>
        <MaleIcon sx={{ width: 24, height: 24 }} />
      </Stack> */}
    </Paper>
  );
}
